import { PublicKey } from "@solana/web3.js";
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } from "@solana/web3.js";

const userAddress = new PublicKey(
  "GLpk4tkUThzUNAyGqjhPacgX1a7SKk2gBL28LLScuDSp"
);

const tokenMintAddress = new PublicKey(
  "EBKowzQwtwnYMigrLuSLY7Xoa3NeGxS4ovjv23CWEvDA"
);

const getAssociateTokenAddress = (tokenMintAddress, userAddress) => {
  return PublicKey.findProgramAddressSync(
    [
      userAddress.toBuffer(),
      TOKEN_PROGRAM_ID.toBuffer(),
      tokenMintAddress.toBuffer(),
    ],
    ASSOCIATED_TOKEN_PROGRAM_ID
  );
};

const [associatedTokenAdress, bump] = getAssociateTokenAddress(tokenMintAddress, userAddress);
console.log(`Associated token Address: ${associatedTokenAdress.toBase58()}, bump: ${bump}`);
