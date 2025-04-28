import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchArticles } from '../api/api';

export default function HomeScreen() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles().then(setArticles);
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}