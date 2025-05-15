import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import { getSectionsWithResources } from '../../../src/api/sectionApi';

const Documents = () => {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSections = async () => {
    try {
      const data = await getSectionsWithResources();
      console.log('HOLA' + data);
      
      setSections(data);
      
    } catch (error) {
      console.error('Error fetching sections:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSections();
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar />
      {loading ? (
        <Text>Cargando secciones...</Text>
      ) : (
        <FlatList
          data={sections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.sectionItem}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>Recursos: {item.resources.length}</Text>
              {item.category && (
                <Text>Categoría: {item.category.name}</Text>
              )}
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  sectionItem: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Documents;