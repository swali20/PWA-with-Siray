import {
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Footer,
  Header,
  Heading,
  Image,
  ResponsiveContext,
} from 'grommet';
import React, { useContext, useState } from 'react';
import faker from 'faker';

export default function App() {
  const size = useContext(ResponsiveContext);

  // returns array of animal objects: [{image: '', type: ''}]
  const getRandomAnimals = (cats) => {
    const animals = [null, null, null, null];

    return animals.map((animal) => {
      // uses faker to get random animal images
      const randomAnimalImage = faker.image.animals();

      // cats is only true if a user clicks the cats button
      if (cats) {
        const cat = faker.animal.cat();

        //cat name + random photo instance
        return { image: randomAnimalImage, type: cat };
      }

      // gets a random animal type for card header
      const randomAnimalType = faker.animal.type();

      //random animal name + random photo instance
      return { image: randomAnimalImage, type: randomAnimalType };
    });
  };

  const fakeAnimals = getRandomAnimals();
  const [animals, setAnimals] = useState(fakeAnimals);

  const handleGetRandomAnimals = () => {
    const fakeAnimals = getRandomAnimals();
    setAnimals(fakeAnimals);
  };
  const handleGetRandomCats = () => {
    const fakeAnimals = getRandomAnimals(true);
    setAnimals(fakeAnimals);
  };

  return (
    <Box overflow="sroll">
      <Box direction="column" background="black">
        <Header
          border={'bottom'}
          justify="center"
          align="center"
          direction="column"
          height="small"
        >
          <Heading level={1}>PWA with Siray</Heading>
          <Heading level={3}>Current screen size: {size}</Heading>
        </Header>
        <Box pad="medium" direction="column">
          <Box
            justify="between"
            pad="medium"
            flex="shrink"
            wrap={true}
            height="xsmall"
          >
            <Button
              margin="small"
              size="small"
              label="Get Random"
              onClick={handleGetRandomAnimals}
            />
            <Button
              primary
              margin="small"
              size="small"
              label="Get Cats"
              onClick={handleGetRandomCats}
            />
          </Box>

          <Box
            wrap={true}
            justify="around"
            align="center"
            pad="medium"
            direction="row"
          >
            {animals.map((animal, i) => (
              <Card key={i} margin="small" width="medium" height="medium">
                <CardHeader background="background-front" pad="medium">
                  {animal.type}
                </CardHeader>
                <CardBody>
                  <Image fit="cover" src={animal.image} />{' '}
                </CardBody>
                <CardFooter background="background-contrast" pad="small">
                  this is totally, 100% a real animal :){' '}
                </CardFooter>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
      <Footer height="xsmall" justify="center" align="start">
        <Anchor
          target="_blank"
          color="focus"
          href="https://twitter.com/siraysoiree"
          label="Follow Siray on Twitter :)"
        />
      </Footer>
    </Box>
  );
}
