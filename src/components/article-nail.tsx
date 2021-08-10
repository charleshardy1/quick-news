import React from 'react';
import { View, Text, Image, Linking, Pressable, GestureResponderEvent } from 'react-native';
import articleNailStyle from '../styles/articleNailStyle';
import Article from '../models/Article';
import Spacer from './spacer'
import * as WebBrowser from 'expo-web-browser';
import { Platform } from 'react-native';

type Props = {
  article: Article
}
const NewsCard: React.FC<Props> = ({ article }) => {
    let linkAction =  () => WebBrowser.openBrowserAsync(article.resourceURL);
    if(Platform.OS === 'web') linkAction = () => Linking.openURL(article.resourceURL);
    return(
        <Pressable onPress={linkAction} style={ articleNailStyle.container}>
            <Text style={articleNailStyle.title}>{article.title}</Text>
            <Spacer height={2} />
            {
                (article.description)?
                (<Text style={articleNailStyle.description}>{article.description}</Text>):
                <Text style={articleNailStyle.description}>No description</Text>
            }
            <Spacer height={15} />
            {
                (article.imageURL)?
                (<Image style={articleNailStyle.image} source={{ uri: article.imageURL }} />):
                <Text style={articleNailStyle.description} >Image not available</Text>
            }
        </Pressable>
    );
}

export default NewsCard;