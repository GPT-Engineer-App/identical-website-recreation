import { Box, Container, Flex, Heading, HStack, IconButton, Image, Input, Text, VStack, Button, Link, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      {/* Header */}
      <Flex as="header" justify="space-between" align="center" py={4} borderBottom="1px solid #e2e8f0">
        <HStack spacing={8}>
          <Image src="/logo.png" alt="Logo" boxSize="50px" />
          <HStack spacing={4}>
            <Link href="#">Möbler</Link>
            <Link href="#">Sängar</Link>
            <Link href="#">Sovrum</Link>
            <Link href="#">Belysning</Link>
            <Link href="#">Inredning</Link>
            <Link href="#">Varumärken</Link>
          </HStack>
        </HStack>
        <HStack spacing={4}>
          <Input placeholder="Sök produkter" size="md" />
          <IconButton aria-label="Search" icon={<FaSearch />} />
          <Link href="#">Inspiration</Link>
          <Link href="#">Butiker</Link>
          <IconButton aria-label="Favorites" icon={<FaHeart />} />
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} />
        </HStack>
      </Flex>

      {/* Breadcrumb Navigation */}
      <Text fontSize="sm" my={4}>
        HEM &gt; HALLMÖBLER &gt; BYRÅ &gt; ESSENCE BYRÅ
      </Text>

      <Flex>
        {/* Product Image Section */}
        <Box flex="1">
          <Image src="/product-main.jpg" alt="Product Image" />
          <HStack spacing={2} mt={2}>
            <Image src="/product-thumb1.jpg" alt="Thumbnail 1" boxSize="50px" />
            <Image src="/product-thumb2.jpg" alt="Thumbnail 2" boxSize="50px" />
            <Image src="/product-thumb3.jpg" alt="Thumbnail 3" boxSize="50px" />
            <Image src="/product-thumb4.jpg" alt="Thumbnail 4" boxSize="50px" />
          </HStack>
        </Box>

        {/* Product Details Section */}
        <Box flex="1" pl={8}>
          <VStack align="start" spacing={4}>
            <Box>
              <Text fontSize="lg" fontWeight="bold">SVENSKA HEM</Text>
              <Heading as="h1" size="xl">ESSENCE - Byrå</Heading>
              <Text fontSize="lg">Massiv ek Oljad, Varmgrå</Text>
            </Box>
            <Box>
              <Text fontSize="2xl" fontWeight="bold">9 995 kr</Text>
              <Text fontSize="lg" textDecoration="line-through">12 495 kr</Text>
            </Box>
            <Box>
              <Text fontSize="md">Betala SEK1 764,19/månad i 6 månader. <Link color="blue.500">Läs mer</Link></Text>
            </Box>
            <Box>
              <Text fontSize="sm">Kampanjpris gäller t.o.m. 2024-07-08</Text>
            </Box>
            <Button colorScheme="teal" size="lg">Lägg i varukorgen</Button>
            <Box>
              <Text fontSize="sm">1-3 veckor / Expressleverans kan erbjudas</Text>
              <Text fontSize="sm">Fri frakt till butik</Text>
              <Text fontSize="sm"><Link color="blue.500">36 butiker</Link></Text>
            </Box>
            <Box>
              <Text fontSize="sm">
                ESSENCE byrå har en tidlös design med sitt eleganta formspråk och diskreta detaljer. Med stommar i en varmgrå kulör och lådfronter i massiv oljad ek skapar den ett varmt och trendigt intryck i inredningen. Utöver det estetiska har byrån, med sina fyra stora och två mindre lådor, gott om förvaring för både små och stora saker.
                <Link color="blue.500"> Läs mer</Link>
              </Text>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Additional Information Tabs */}
      <Tabs mt={8}>
        <TabList>
          <Tab>SPECIFIKATIONER</Tab>
          <Tab>SKÖTSELRÅD</Tab>
          <Tab>DOKUMENT</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>Specifikationer content goes here.</p>
          </TabPanel>
          <TabPanel>
            <p>Skötselråd content goes here.</p>
          </TabPanel>
          <TabPanel>
            <p>Dokument content goes here.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default Index;