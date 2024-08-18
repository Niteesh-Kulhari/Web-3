import * as ed from "@noble/ed25519"

async function main() {
    
    const privateKey = ed.utils.randomPrivateKey();

    const message  = new TextEncoder().encode("Niteesh Kulhari");

    const publicKey = await ed.getPublicKeyAsync(privateKey);

    const sign = await ed.signAsync(message, privateKey);

    const verify = await ed.verifyAsync(sign,message, publicKey);

    if(verify){
        console.log("Correct")
    }else{
        console.log("Wrong")
    }
}


main()