// Define the NFT object
const NFT = {
    name: "My Awesome NFT",
    eyeColor: "blue",
    shirtType: "t-shirt",
    bling: true,
  };
  
  // Variable to store all NFTs
  const myNFTs = [];
  
  // Function to print NFT details
  function printNFTDetails(nft) {
    console.log("NFT Name: " + nft.name);
    console.log("Eye Color: " + nft.eyeColor);
    console.log("Shirt Type: " + nft.shirtType);
    console.log("Bling: " + (nft.bling ? "Yes" : "No"));
    console.log("----------------------");
  }
  
  // Add the NFT to the collection
  myNFTs.push(NFT);
  
  // Print the details of all NFTs in the collection
  for (let i = 0; i < myNFTs.length; i++) {
    const nft = myNFTs[i];
    printNFTDetails(nft);
  }
  