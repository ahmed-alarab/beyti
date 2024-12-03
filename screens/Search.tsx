import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

function Search({ posts }) {
  const MIN = 0;
  const MAX = 2000;

  const [values, setValues] = useState([MIN, MAX]);
  const [location, setLocation] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [type, setType] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = posts.filter((post) => {
    const inPriceRange = post.price >= values[0] && post.price <= values[1];
    const matchesLocation = location ? post.location.toLowerCase().includes(location.toLowerCase()) : true;
    const matchesBedrooms = bedrooms ? post.bedrooms === parseInt(bedrooms) : true;
    const matchesType = type === "" || post.propertyType === type; 
    return inPriceRange && matchesLocation && matchesBedrooms && matchesType;
});


  const showDetails = (post) => {
    setSelectedPost(post);
  };

  const closeDetails = () => {
    setSelectedPost(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <View style={styles.filterItem}>
          <Text style={styles.filterTitle}>Price Range</Text>
          <Text>
            ${values[0]} - ${values[1]}
          </Text>
          <MultiSlider
            values={values}
            min={MIN}
            max={MAX}
            onValuesChange={(newValues) => setValues(newValues)}
            sliderLength={280}
          />
        </View>

        <View style={styles.filterItem}>
          <Text style={styles.filterTitle}>Location</Text>
          <Picker
            selectedValue={location}
            onValueChange={(value) => setLocation(value)}
            style={{ height: 50, width: '100%' }}>
            <Picker.Item label="All Locations" value="" />
            <Picker.Item label="Beirut" value="Beirut" />
            <Picker.Item label="Baalbeck" value="Baalbeck" />
            <Picker.Item label="Tripoli" value="Tripoli" />
            <Picker.Item label="Jounieh" value="Jounieh" />
            <Picker.Item label="Zahle" value="Zahle" />
          </Picker>
        </View>

        <View style={styles.filterItem}>
          <Text style={styles.filterTitle}>Bedrooms</Text>
          <Picker
            selectedValue={bedrooms}
            onValueChange={(value) => setBedrooms(value)}
            style={styles.picker}>
            <Picker.Item label="Any" value="" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4+" value="4" />
          </Picker>
        </View>

        <View style={styles.filterItem}>
          <Text style={styles.filterTitle}>Property Type</Text>
          <Picker
            selectedValue={type}
            onValueChange={(value) => setType(value)}
            style={styles.picker}>
            <Picker.Item label="Any" value="" />
            <Picker.Item label="Detached Houses" value="Detached Houses" />
            <Picker.Item label="Semi-Detached Houses" value="Semi-Detached Houses" />
            <Picker.Item label="Duplexes" value="Duplexes" />
            <Picker.Item label="Mansions" value="Mansions" />
            <Picker.Item label="Chalets" value="Chalets" />
            <Picker.Item label="Terraced Houses" value="Terraced Houses" />
            <Picker.Item label="Cabins" value="Cabins" />
            <Picker.Item label="Courtyard Houses" value="Courtyard Houses" />
            <Picker.Item label="Villas" value="Villas" />
          </Picker>
        </View>
      </View>

      <FlatList
        data={filteredPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.postCard}>
            <Image source={item.image} style={styles.postImage} />
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postPrice}>${item.price}</Text>
            <TouchableOpacity
              onPress={() => showDetails(item)}
              style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}>Details</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {selectedPost && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={!!selectedPost}
          onRequestClose={closeDetails}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={closeDetails} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>X</Text>
              </TouchableOpacity>
              <Image
                source={selectedPost.image}
                style={styles.modalImage}
              />
              <Text style={styles.modalTitle}>{selectedPost.title}</Text>
              <Text>Location: {selectedPost.location}</Text>
              <Text>Bedrooms: {selectedPost.bedrooms}</Text>
              <Text>Type: {selectedPost.propertyType}</Text>
              <Text>Price: ${selectedPost.price}</Text>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}





const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 10 },
  filterContainer: { marginBottom: 20 },
  filterItem: { marginBottom: 20 },
  filterTitle: { fontSize: 16, fontWeight: 'bold' },
  picker: { height: 50, width: '100%' },
  postCard: { marginBottom: 20, borderWidth: 1, padding: 10, borderRadius: 10 },
  postImage: { width: '100%', height: 200, borderRadius: 10 },
  postTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  postPrice: { fontSize: 16, color: 'green', marginVertical: 5 },
  detailsButton: { backgroundColor: 'blue', padding: 10, borderRadius: 5 },
  detailsButtonText: { color: 'white', textAlign: 'center' },
  modalContainer: { flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 10, alignItems: 'center' },
  modalImage: { width: 200, height: 200, marginBottom: 20 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  closeButton: { position: 'absolute', top: 10, right: 10 },
  closeButtonText: { fontSize: 16, color: 'red' },
});

export default Search;
