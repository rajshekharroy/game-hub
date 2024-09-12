import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";


const GenreList = () => {
  const { data, error, isLoading } = useGenre();
  console.log(data);
  return (
    <List>
      {/* {data.map(genre => <ListItem key={genre.id}><Image src={getCroppedImageUrl(genre.image_background)} boxSize={10} borderRadius="50%"/>{genre.name}</ListItem>)} */}

      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={10}
              borderRadius={8}
            />
            <Text fontSize= "lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
