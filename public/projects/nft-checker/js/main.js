const myModal = document.getElementById("myModal");
const myInput = document.getElementById("myInput");

myModal.addEventListener("shown.bs.modal", () => {
  myInput.focus();
});

function getResult() {
  let cheker = document.getElementById("checker").value;
  let address = [
    "0x5bb54C8025C96f236A5383Ca787b53cBDB01FFE2",
    "0xd47f9259845cf7ef4d392f67cd3858aaecb1f329",
    "0x605FbDD3d2e9Ba4966222748332a4137ED2dDee9",
    "0xFbd85f2E389ccc3CDF2006F16CF7813a5a0B3715",
    "0x7fBcE42455AA9B092a53154c9a2161250E8D8d5A",
    "0x2872285824907dF31dE5f43D45648d732eE27069",
    "0xE884962551561560BE746C9f81f90a60176eBA00",
    "0x2E674A7c96cE00d28590A2F51f0F37D8c1226458",
    "0x009a950ac242a003d0eb6e2fd1512e07a744bd3d",
    "0xf69dD99551F23F4748B91FF2182fDAb9b1525A59",
    "0x99713A25aBd5dF87b748Cce31823814613D04488",
    "0x256f81F83243ea3Dc17b6799fc95561943EB4232",
    "0xDa32fB556a8015b2d492CF19c339401Ad4789Ebc",
    "0x00C24c351571EdB6Db7A5616B5FF91c08BF1c218",
    "0xf14b3B67A412BF472790De988c97c1065E01f393",
    "0x7C60Bf4b562eA4A029720c8B5fc4C8ad098FFE0D",
    "0xC4fb94A9BDd52211bC8A7965AECf25d011ac9723",
    "0xc521D52fAbC9ea40F72c7065B2aF9f0eaED20150",
    "0x8FF671FE04c0d56c6B5604C594e97420B8a3b0dA",
    "0x0C636431f226982cE0E4c6e2aa7759d71747a853",
    "0xF4AaDdB86cA7B8115342e7bCA3d100b3e8D3c263",
    "0x01b50f74caB2fEdCcbCE173aF16FE848E9Fd9281",
    "0x55933bBE5c95DAD58be3272A1e5e413238C0405A",
    "0x41B87c3b3E5212e2C2a66a29F60E5FC0a65b8C50",
    "0xec507294ed35E040aC9485Ea975Cb3bddf443e3c",
    "0x32e767172A009f6Cf5C303C6616481e93085e996",
    "0xF48cb479671B52E13D0ccA4B3178027D3d1D1ac8",
    "0x6956a16fF9d0E8CE762bF6653B5deFdF74Ef9364",
    "0xde0Fa6299B4CdD054ce4d0C263305E37fB32f749",
    "0x475606d141047A655aEfFd2055448E4B7Ac2Cc58",
    "0x49Aa097eDDdb55Ef0503896974a447B5662874A5",
    "0xEf6fdfe87081da6acC6E4755d095b8C23568577F",
    "0x35dDD21b0182925432f7D6Ba19221a63b26FE498",
    "0xD74a8323C70532ca6031e732DF3AeA3DE53d005A",
    "0x00cEc548AFD1C1547D4B3610aa6891011a2C8680",
    "0xd72124560079bDC2A324Ca3505AEeFDF61F51732",
    "0xDf6268EA0D37d41C0A778D8C8A4D4dA88cf2ec3C",
    "0x0c60857665B1E547b688163C142a65DF029F96e0",
    "0x8E9a4Ad532a57341dcA7D31efcD554860508BAC4",
    "0x567daF7C0B310F12Ea58CF6F559B5Ee5cbE1f30c",
    "0x0F602230D41363CFBC5f9cd43ccBf0a2B5920F77",
    "0x939e68c97a19c21f057d0339Ec8990e6481c1316",
    "0x55552d486a18fcb4892b7969e6df5531a04692b3",
    "0x45645E1521A255C96DB063dbd546FD9dBdbdf7c2",
    "0xd689E70DD8138d2e1aDe0654B78A321b99A7B3aC",
    "0x4F64C6b8333F74890b0ba0AF4d480d8ecce01e17",
    "0xfA3352CB2F9A78e9Df01a9dc3e789f2eCC75970b",
    "0xd39E17194c2852BEc3a5C710269a6AF7A76Adf35",
    "0x12168dAb693a1cAEc7215eb7d03b6858cc567aBf",
    "0xE4c5c84fb8c2aEff8Ce183A190e0d1389BB3e695",
    "0x816Abc5677116FD25c6c22009E1B45bA30D71F40",
    "0xde8A0426c6ff0187E3133aC4A6b27e1c6e820C4c",
    "0x16203152655A08D65E4770D7877F9d339D2E17f5",
    "0xc8c3B97D5F5987701de1809e2A7F100af4d3DE84",
    "0x2B65F85E81Eec21EDa840B8f9c4FD657F917B092",
    "0xB439a8698f4a225bB87Ccd38554372Fc115a497E",
    "0xf4b48E4930AA8272429D00A1c29877fD004B5fB4",
    "0x9d14009b3b4B2687f6aa605aA6b7A6384f32B5C1",
    "0xd582a0530a1E5AEE63052a68aa745657A8471504",
    "0x404ABd7af55989D4d71B02E801634A0d5787346B",
    "0x606e3587564c7D0a48b02156CbE441EDEb0Ea504",
    "0x8e2c66C5422ff68dc72E320a7349eb75D95b020d",
    "0x01d2f9d2C73dc71b249fD85272E41F7e0C959D6d",
    "0x4aDB9Cf90c2a3aF77A23199d5D6398e3d43d78C8",
    "0x0fB0fd84628aF54005B7BdcA204121ED72695D48",
    "0xe80FB7Ac505d5C4138070a98C6aaD24870eEf1dd",
    "0x540945ABF84CF4D56C57CC6bdFcF89E6C39F8608",
    "0x44eAF98b8F3b3FdCebA482504058c1D3791c48E3",
    "0x94D41F055528361368874E3F6DC37605C2d91cFC",
    "0x818d5E91B8e0Fe5058ee673a551698E3541f5034",
    "0xc94D3dEee6A471C04f0b21134706f492d2267649",
    "0x6ee5F4125e7a1AB7728Ba0609cf0D056E0cE3AC8",
    "0x3F680a14c91Ed01A983D684Ec26E461fC10c4064",
    "0x783249604218589F9f0835032D9a5e75De5c9F5F",
    "0x3Ead9F7E43b775079910E9d870b09f7b386B3c14",
    "0x66368a1B3A81d792bEdF0B7637E1f9c922518b22",
    "0x776D4CB1b054B69223eE491091D6F97A46C0B301",
    "0x6c2fe0E1e45B7c700031dE851EEAf8e98D6Badc3",
    "0xE4efEfAd0fc0f66487EcD341199545EC99e0973C",
    "0x49185Da8AE1C6b5A3FdCD278CB7F7EC8C6dC947C",
    "0x37788FEa3a0F34E26950c9e5C03263358Ff51710",
    "0x063a8308Ac8E729f720CE59A77B28c4a41E689d3",
    "0xb14C17cd11E7F17F3C5ACD13B2Fe68185747f795",
    "0x0002937C976286ede8BbC21D2bb35f2a80ac1af3",
    "0xD29d6Df8eC0D8D5B208151196Ff0969988A8f909",
    "0xAE0E24e4F44Ee48E4A6Ba6Fe1F1104E68cec92a4",
    "0x912064700cc53CA921992a739E4510f9E060eDcc",
    "0xEab16DF6C3Bb01b4e9f2482694355b8404B9Ea02",
    "0xD8e7C8fc95087C8372301429B119f81d7D167633",
    "0x845A288B5d774E6c6B7d6C7C89e2a3542bD61785",
    "0x51612902d691c639e75aDb3fF39BE108643Fa9a0",
    "0xf9F0412DE241d0884e06116834179b6fE7f37FEe",
    "0x7c73Ffab5E7595275C25632500D00063fE40C744",
    "0x56F032bAe603818B447fcA18b594EB6eA6C8B64F",
    "0x3Db06C3C6088Ad085E8ca22EE8DBd83B62141b9B",
    "0x81916e2B554bC2644AaF9C0C5782BEd6F7D8CD43",
    "0xF1D8eaDE65271Bcd008f7c7AC0F1467f5C675a26",
    "0x9c6a0584cf43c24e0E55f0df0AfDFaB56daa7479",
    "0xa00126cC9c67d251cc917a5eD0B6b908B1e41b59",
    "0x99245b0928C9739a763d6a60B34c72A960713ed2",
    "0xbE7E576848b434925D744FCf98d8229Affa941Dd",
    "0x056f79899Ac97e7ED4c141968eC93668116613Fe",
    "0x99A728E0101782B91B48B7f687e41783Db87420d",
    "0x54a6523F22B31A90E7b1FF179F36D609f40ff931",
    "0xD14A2D0F0d9930110D5a2095a4b6101ec5a3BDa6",
    "0x50D295eF0d437FA2038c1b5253138532883103c4",
    "0x6c2227158C65870FF346287CBd123cB840Cdd62d",
    "0x290bd8996bb4923350B1f0cf70533Ca81a2216B6",
    "0x3eE39Ad4295b579ddee749D63Bf0d7507676f4d4",
    "0xa0C3856bBA5C4c71f490551776C0A0e0231708Ef",
    "0x3E515DA6A3feDcd963DAD3957C4bAA0fE97f1639",
    "0xE8E3217be0F3Ef89285603a752ef0F2d4b113b56",
    "0xCF35dB879A80C2292487D82Fcf83Cbc17425848D",
    "0x0c30F33E4c611165Fc3577D450dC01811E983e2F",
    "0x27cFDFe8370C810119695966a09b20bA11fA852b",
    "0x8b8F2AB44EC3588E0051bE48e477e25FfF582341",
    "0x90BD7A1b542059BDC72a3db4eA31dEb989183192",
    "0xb87dF7612D63Ad641b8fe0ff58BeaF959fDd84B0",
    "0xf737C32B645026C6f0b3F71bD84Cc67829dC89e9",
    "0x4034Bed2f138de45261a9cbE3469d2b7014AbACF",
    "0x4A10C1458F0B24669167396db85fb0372C04d853",
    "0x4fbcb822e44B1103b403320d42aa23f19b5B46Ce",
    "0xd677E39e2CF631Cc5128150aC0ee54Ea453e3256",
    "0x226F3Cad6Ca7998CcdC65CcF95B23Df250E4Cc86",
    "0x748bA060910337607cC596Af39fEDc3E88618101",
    "0x118513CF3C86fFeb5deCD52D0128f28C34d73c19",
    "0x9655284390Fd303cFa1019c8f3A103A1a7455B2f",
    "0x3Fb47F7db5ab1a3Af5aC3417a77CB7DBe70ee6C5",
    "0xA45a7D16CA54c81515884791EBBfaC991Ca3F18c",
    "0xD123F3B9e5a6a5b30EaBEBF0c9e4ffdE580781eC",
    "0x684ea3A3840718bB1BcB88c931bbe585443D1152",
    "0xe30185b81bCC9Ce290325A68c3F3748497D8A46C",
    "0xacbf628ED859efef5e68C323A0f91d143828De27",
    "0xb39d0e9018C376A4fEC8a7a479Bea786da40A2AA",
    "0xfF70CFab6aF05D49809Bed81017790a0d62C319a",
    "0x7A25975514351aF651Dc4647e2FDB8A88C9b9992",
    "0x75e3AeE70934088Ae6f9e144B4464BA13ac846C4",
    "0x5636966433544861CA813719a5721A3dd47eBA6f",
    "0x7D7ee859Df3F417639D61a5954Aa344E5344dD68",
    "0xD469974e39B8F1EFC615FaD5F37804A809BcbD75",
    "0xdC7D8c7c837fAd33979C51212986b68242fa8815",
    "0x17bAD89Bc66b238495A84a793Ae527a0e993F02c",
    "0x5A7225267D848673A58E4a12a82fe2143D6689aa",
    "0x4d91247eE756E77f815FEA9De8dF41114E23b5f4",
    "0x561129945cc812589ffdd2dAc55D7e282169B1D0",
    "0xF7df35E5b15E7597354a888B179407e2Fd5a0326",
    "0x6e50d23048f9286fE676a55341B03916439c517B",
    "0xaCB4A0a169C0f55E71bBCC2Bea63123Ba6478BbE",
    "0xb9dE4feF66d15c65DC69c9FAe60D146c663b0c38",
    "0x9A3C73128A2dAb69d65F063E722096E59C302d44",
    "0xf78Ec8F124fC993701182e6ef3E08198720F616C",
    "0x512811f75F54Bc9FF63C4BEf9330612AcC856848",
    "0xBc3340130876Edb51AC044D8658b4260Eb4a1C29",
    "0xB11D583D6a19ea928c8AaB9161e32CF2Eaa16B6b",
    "0xC10F9E184De4e3A0B335D56048247e41671012Cf",
    "0xa89d3B90cD681a1A9a12E008a8Da9fF4a3E49bA7",
    "0x3100BcB013490FAF41F468062eDa05907009906F",
    "0xa731645284f7b59fD72d59A5BE4b9735BD6006e1",
    "0x6DB1af70243dB867a3CEa0c0b7f52251B5617cd8",
    "0x1705A2777B895B6Fab834cb13aA876c44087A57E",
    "0x1C123f1aB779ce1C825F3207a520256351E082f6",
    "0x36e82e089FD8a505eD5a802e1172931B96F68968",
    "0xd9FBF43386f26896b465118E33eEd8f1919a073c",
    "0x179bCC6bc3e683E457cC176682f9bAE5305f920F",
    "0x82799e066792b243eED9FE05eE2DfD6688fE4e5a",
    "0xBCa09D3493796FE0d24344E48b1716DeB80DC068",
    "0x55B350F4abCD1755F844cC12Bf53B8D749FAa698",
    "0x2C0067DB5FFA048a4bEA0AaEfF5AF6F36214d4Da",
    "0x77857e5938cAa3A233E3477Dbee1b4f36218Faed",
    "0x70F6b7333717dea59B1C3EB4835e3f4a7a037b6F",
    "0xe1d16A250c4Dd6c7B2BF12A3e630a5381FddE306",
    "0xb9820A7d1A1C97c339A471457c94Cb67354f5B9f",
    "0x53cF6198b88c405870D88D75968B34ce53a6C968",
    "0xd3c511755C42A2420634C398335A9ec0ddB7eD87",
    "0xEFaF703E978ebAbC620c2eeDB565088f4C40143f",
    "0xE92785138c639473DBd8da0fB2537890d1c7d0b4",
    "0xBb5E4fd87de560FE68d68b9C8973bF5B99d78bbf",
    "0xadACce622B0619E836Cb87978e1558AfF9b27467",
    "0x91FC25EaabDA8282eBcDfDCD1e3963bb556462e9",
    "0xB293B48536207a2444203841e7BEDB48D36aC76a",
    "0xcfB8347d3722e38a1C06A466a4F5d5958994971D",
    "0x516e14EFF2349bbF09c7b119E9767C70684deE2f",
    "0x731D971A90c8245804ab7E08a4cbc9489A47E364",
    "0x9D64ed6aB3C1D46c920FA457377e21A8270e70bA",
    "0x19E72649487DA029e411aEb17A01DA549a23640D",
    "0xca3590991e394fbBc2D1729a20Be127149AE7C8B",
    "0x06537D68fA3E86cedF20161E99Ec5CCe7f8b7003",
    "0xdFe51f6F0C5a9f02A1d0A995b688E0B9dAA9B4dD",
    "0xBD0BE937F87CA01dfc473891c4B48de5D79f96c4",
    "0xbd7A24805Fd604652c87B8204f8E658EA46dC3BF",
    "0x647Cbb9391ad9113855EBc9eF5CdD4bE689C36c0",
    "0xb3bAd5fE2570CA0A451363cFF96C95025C116931",
    "0x2769A6f5A23722Ab7cf40c7BE7857Cb3F4c5735E",
    "0xF7B861fba42096fE5Cf194286e9a4786230A1E9F",
    "0x2Fa47b90C037251C198EafCf87438EC64039BBE0",
    "0x010418fdB84Ae6FA24564B54CA1AF82E1C332Ab2",
    "0x2d7Fc97cb70Fcd534499bD898E703d93287d0cfb",
    "0x866BfDeE0D0ddA3f5CCe79C70B32EF5887f271d4",
    "0x9fD2FB328E5173CF4bf7BFB7895c2Dd690A99AeD",
    "0x5b7FeaE15B479d3fa5917036a69Ef02e77B53246",
    "0x5548584D74f7B5Bd5eD8016755bc1DE27AA35621",
    "0x232c53E4949136Ae688585D1222de3aE910360e5",
    "0x24461D6C1562A81fAEC9bfdF925ED73d79ad374d",
    "0x38d204DB2A8a3f8E07d330B904e7Bc3065871B0A",
    "0xF32E1cFc6F012F9104C50ca3F6fA552F5641f798",
    "0x4993aB4caC3884A4Fc8Cc2746B05b078E133B1Eb",
    "0xFfD867EeDb0799B7d656e3765f8b41C530a524CD",
    "0xd4c63de811024cDb3403Ae09b901b37a11555a8c",
    "0x7083AeeF07fBe585ca110c1bC06887b0C850EA53",
    "0x0309687e16457cB4500E2E85aB13860b7a876Ac7",
    "0xe28E8446E049fB79b5501Ec5F467130aD9194c9A",
    "0x7bFADd7977FA5Fc6e2cD3F5a2552561e19754F4f",
    "0x89043dD4FE5F86948E23C9Bd448C4F66BC286F42",
    "0x3f445ab0efaA42105C162bfFB4Bc72A20C249137",
    "0xA17fA91E1f008e1E3D3E98534EAb6BD0D6BC65c9",
    "0xBaa37a7234552c6EaA83b8740797EEa0BEEC0B8e",
    "0x32F430bf55eF1823E918Db413E9DDe77521BdC99",
    "0x78DAb173a937806447C7F14a4889872Df75983FE",
    "0xa7C4dFE43F5686082f5F91ca1697a7c9ce0c7A04",
    "0xA5b85B050704c631EdCF0EA1498148BCf20bcD81",
    "0x758BF7889DDeF7E96B4296d32a086c66d853807c",
    "0xbCDbfb16b70802D54E3cA37e7BA78cf89C5416fe",
    "0x62e4a2aA81B4Ec1BE359a338a5e93e60363751F9",
    "0x61e35D4a3540D73e9bD1A9D033eA9C48b74f14de",
    "0x207A48542E2666927eA8cDe36B61A8D756D6C163",
    "0x4c4f76Fb08d5a44d474891988133240449C26082",
    "0x204E196174DB7C1fE618f8315051402847286Cb9",
    "0x38a6A0da8C66467A3bE19e293FB6A7A10fA7b7d2",
    "0xBff30d8d9b76FF510997c3c0435De011B4Dfab9f",
    "0x9ca73054BADeE6B9270faC11e1d87B323b6189b1",
    "0xF0B68255D0b548426c038ECE7c1e236ecdCD04E7",
    "0x0D45AbdD1AEcCfF2Be0EAf338329d42EF09C02FE",
    "0x058E64e9D1AE5F4f0AAB7575a843B16f96D6fC6b",
    "0x06A1F68Aa33DEE77f73CB5547AF409d79F296840",
    "0x77F2BAf88197237Aa0778F6803D9CC6920f74B23",
    "0xa2dedD34E1C6331110A5B288018F35e0A10D1357",
    "0xb0c2656E59f4A751EbE731AcB3D9F158586ceb3F",
    "0xc2B12C89D0F83Dd21a77b9c67e97100776eA3050",
    "0xD6832e35Cb71A11df09dc6012c5FB3Cea99eC6D2",
    "0x58e0338a19Eeea1a7efc328B7243deaf611aD1ea",
    "0xa5E0d52293fD36ac09150B0700Ef85399ED6A3a7",
    "0x4d4310D686Da369e0a9D419d0EEBc11f8a565033",
    "0x23B540Ad5fEFfbf0bADa6fb65b419DffC4524Bc7",
    "0x92838ec07199fF742093537B88BE66E180622De6",
    "0x94395B9f171b6CB4530E582dF14dF6FB58e8EF5a",
    "0xa754a4b33f4C4657F39E314704Db3aA84df2A6f9",
    "0xDcD2f676bA414B4745832a4C09b68415C444e2a5",
    "0x2c673FD025838EBf03b62D6175059B4ef20347AE",
    "0xa89d3B90cD681a1A9a12E008a8Da9fF4a3E49bA7",
    "0x53E58fC50Bd93c7aC4A9eF8aC82044BA7b47b451",
    "0xb966B40C6Df747B9E0aA4E40aecf2Ea75bdb95fE",
    "0x32651A78A16eA5C0D9139D5418b10e0Fd70923c4",
    "0x12488af2f31E022B49741A4f820e8dF80e259dBc",
    "0x21BB955A63589679CfB60Cf4dd602c25feD375dd",
    "0x5C46b7e57266925D5a713Ce1135f394Af4c973bE",
    "0x24F860fa7DD62E1A77485d714202Fa93Fc558271",
    "0x820C40A9d7229e2563f3E9937fBEf88934A80D7F",
    "0x9C9BE2f65e5B4dcddCfC5391e20b98Fd8EaeBF5C",
    "0x207A48542E2666927eA8cDe36B61A8D756D6C163",
    "0xe2e668815FdFdB28c0EEb64dB0e4C22a1f654809",
    "0xeC78c5f9cdE03537abea9A75Bd5B545e556cDE2d",
    "0x92272E4a1Ea0634596dF9E8a6f45D25AD4635302",
    "0x20e07C09ad19E159D4aaC13d05D952a4A9b94715",
    "0xA5830E5e210B9a3877310025B4160e63036b0BCB",
    "0x0bCFB8EC93b68bEF409A15cEeD51e4a092c84d03",
    "0x941F07C95b191234B01dcDD0C6a9CFE7dF816916",
    "0x7A6D82CD77692b75091288416DCE417eb0aC664e",
    "0x54d3ad1f57D37bF383566784601f4e1c151BF8cc",
    "0x054e2873926f601Ab7bFa19c9cb1Cc708Ac7F8F6",
    "0x917d48F59e9aB31eD738b4D314bAB1C2B5dd4A71",
    "0xeE4C26Da3F63A53F8101c922edc404D0A6a5bec8",
    "0xE51C76BD8F503DA3c8CDAa565Bf0aeD0f1a2818f",
    "0xf40dCFfDC6e1908eca0Ca6A049F81a7D4d7CaaF3",
    "0xfd34611f8e285B3624eAF9D2366B1D7cdB2f3d30",
    "0x09e7D81495eD4943219E36eE181864D999733eFd",
    "0x5bA4e9863B24D57354c5533071188072b2fadF59",
    "0x2d7d5dD8a3218dFA314a53695F2e2c3e25630203",
    "0xD25Db8C6Bc09500ac7AA227A8E9d8B598d009f37",
    "0x009c7b2CA55408BCbb73216EE2d63AEbD92B4CF7",
    "0x1aA666D676Fde62ae9477c75e7F501f214D1849c",
    "0x06B60897c7ec4761E62B067bEcaDb754ac5669EC",
    "0x325871d0EF3F27c4f837c4714aE5C2ba5B543425",
    "0xC9652bb705C24eD933267c4cF0C66B92112b7dF2",
    "0xCb71dde58C8957f29B79e1dd5edaF12b52C09F00",
    "0x867b21b711caB266673Ed17C8543D320078f70BD",
    "0xe99455894242fE88D4A1Db765c170DD4E101f07d",
    "0x272c16c98Ea9c0D8750a1B9F15F2da76e2C1D7D1",
    "0xdf015fc8B3244D0AF878425091d3A6b7De7c21D0",
    "0x8CfdD6FEB883C802177F0C0143222E84609fDA09",
    "0xA041e49a352BcC3Ed301e92B55EB5b78208a8A80",
    "0x7CBb6a014b1AD3680852319FC2F881778eF78cd9",
    "0x076C1a6dF1A7E4f16DAe9A26D3cE5a01CA94F7c0",
    "0xB3a179C0a821c56516835A76Bd327E714ee10cb3",
    "0x05B3A0BB9E3d0F3Fb2d7125c6351E20F30e362ed",
    "0x16cF22A339e09FFC2ef5f9E90bCbB4E1d6076567",
    "0xbf3E891434Cbbb94Fe1Ab6728e66BD76e42E83a7",
    "0xF963dd43D6382FdeA08b20c9B5Ad4738535f7813",
    "0xDf1B55918B3cAe48D2B1a5651e370Ff77daF755d",
    "0xFCDd64f7D6f2B66d568a0d4BABE13dC40a3f2165",
    "0xc85Bc0A22c3792f75f16F15FC2f7B762c60C82cE",
    "0x4307bB7E32Dc8A8dd21Ec3Ae7C20f4D2788Ec5a4",
    "0xDcCc665eFce9FA34e0b441c30ea6b760d03c10c7",
    "0x0157aB4Ef66BCF90596c438A6640bBb93c857255",
    "0x1F9Bc5a40F41B992E8Daf5C023b180e7Ae6B204C",
    "0x2c1851A9A96a92fF0022E2C69C337DbDe0e778C5",
    "0xA6C0E6197f86ba967618468b8e1dC344C049994b",
    "0xE7de2fF245bcf840d0d20C04c00fEc2779861f36",
    "0x74f787bF2f7C77FEfE6394d7FEe0A98514c542A9",
    "0xDE5054899e767c3f3FF362f94Da545642ba03F3C",
    "0x8f550D49F0A3Fad90B03Cd9ad4dF9675D882434c",
    "0xD81cfebDd4a1952b573beAd1b06932a3261683d5",
    "0x8c97B171738aA8fdbD0bb73a440Be2424F840635",
    "0xBF96e5cf8Ab4d69B7165B47Ad133F2f39F9F866e",
    "0x5CB1FA46Cad9B367f43AB89A7E415c8E59a88D2f",
    "0x7457E2A6dd5f2B23CfC8ac280a673cf0466D5df6",
    "0x9703A5Faf55A485273A70555DDCc0145f7A89D45",
    "0x0aFa185dEF6c462434491147Ced706cAbEd1c3b8",
    "0xd80266e61dec6427C192efAe2DcE3B8714e30ADE",
    "0xDdfac61FC6a490aF839DB6e564C34844BC72600F",
    "0xBbF7267795bCBA89D48C5699e62a60288045b433",
    "0xD8D0Be5c96C2A7A7C169cD91FE6AE61d5385584C",
    "0x5245304CCE15Ba4e67F4357A6766c35FE1F8823e",
    "0x7F775D8b0d99E1757084647386cdFA49d2188072",
    "0x8eCbAD4833FFe28125fF23C9ed80F4C4765246DC",
    "0xD6F6e84D47230D556502DddB4e7F13dE5439f263",
    "0xc1692cD69493436b01cddcbE5FeDbC911746A7C1",
    "0x32e30dcD6b2f0a989Be77D83489AB97a7Ab46CbA",
    "0x301aA246C955780ECD39583beDe47fa8AADb4fB0",
    "0xc2BB56815E2b9B4BDaA0dBBc85b33479c9993681",
    "0x582cb2Bc4300F0f1aF98FD5e93D630BaB47838b1",
    "0xbBDffB74A91cf24A9B072a5Ac6BD5DEf7936bc99",
    "0x32A565A4F514FC02B65f0354D8f25c232E9BEDB7",
    "0x524EdE14A6b00f73DAA26b48d34A7AbccDf6B409",
    "0xe324aca233F7B1b17aB974Ed741b1951Ba996CED",
    "0x00cEc548AFD1C1547D4B3610aa6891011a2C8680",
    "0xd72124560079bDC2A324Ca3505AEeFDF61F51732",
    "0xDf6268EA0D37d41C0A778D8C8A4D4dA88cf2ec3C",
    "0x0c60857665B1E547b688163C142a65DF029F96e0",
    "0x8E9a4Ad532a57341dcA7D31efcD554860508BAC4",
    "0x567daF7C0B310F12Ea58CF6F559B5Ee5cbE1f30c",
    "0x0F602230D41363CFBC5f9cd43ccBf0a2B5920F77",
    "0x939e68c97a19c21f057d0339Ec8990e6481c1316",
    "0x55552d486a18fcb4892b7969e6df5531a04692b3",
    "0x45645E1521A255C96DB063dbd546FD9dBdbdf7c2",
    "0xd2A8aDDf1528e02039E599aCDA62ac3363253B20",
    "0x360e3f47a62de5876b3f25ac29e947a9fec17bca",
    "0x630F47be29bBD99b46352117bF62AA5E735a8035",
    "0xb0ae08CA5e818473C728dcce669BC4B2d6c444eB",
    "0x1d8da89911359DD7288508231fb61d5123b5feD5",
    "0x5965Fa6Fe50A1eAc342c472A85cb7b52f8529E3b",
    "0xD301bd192d1Cc89FB0E532654A183E8a597FEb17",
    "0x529E253EC3ee5147f1EC1436e1558f6970a664F6",
    "0xACAc9119237917f5b1EE896179827305812a2345",
    "0x32A565A4F514FC02B65f0354D8f25c232E9BEDB7",
    "0x0F0c6Ead741f9f4a217503F96239b5e4B84d80CF",
    "0xf6c2997ffF7affe4A7601988539089Ce3af9DAAe",
    "0x7E6e04e0e9177Abe7Ad688350731220613aa32E8",
    "0xb6C8A7FeFcE556c5401EFb8984aA0D6ea93D4343",
    "0x6f7BDe93A4f532a165eB1546353a8AfAbBEAbf3F",
    "0x1Cb6B2180f8B833e597699Bb2e9Cae9757d4127a",
    "0x0d7369b376c838524a231E51a4C2a9D74a4BB765",
    "0xeCB8D1e2928068bFcF7518D45a271BbaD70c9955",
    "0xFAD0eec28551C2b72F4623b40712d722FFf80a30",
    "0x819395B78cdA71CBCaC6B31e679C7853D9176Cd3",
    "0x80B574EFA349FE9B0385271Ebe7C25903281bd1F",
    "0xa8e69A428f372cFf143327C80bec8E880Ad41d1a",
    "0xFE30e4Cf0CA3ceef92653db757dEBeDD924DCf63",
    "0x0bf649eEbdb06a5bC886847ccBbD6299E6F1DEe7",
    "0xaf9AC8f3634C49c1907cc945f063e5bd4Ff1b0C9",
    "0xCcb928CE40bA12C65A47dAEC2BE4152d34f53080",
    "0xF6Bc4f9A5BDE30Ace2BbB0B4A58206723D5220A0",
    "0xFD7C4a6ff5513491F7DB5F71C1A16F71EC59fF9E",
    "0x766FCf663D1f5D49777EBbDC978faFfE58f225D3",
    "0x6D24eE55Cd05040cF3A2A01844A9490413145311",
    "0x1b69ec2F03c21CF7f9a791Be9c01EfBd01F49Ef5",
    "0xd9b2b1E441C9316Fc226dD335bd989Ce33611F6a",
    "0xDC27dCd35a4cf633A1E7F20096ed32cbd424bC97",
    "0xe23853742c4c1249A0F6f21768BaD9dF74dA3c6d",
    "0x72914da276136Cdac86D4eB1BC7445DeB821D1E0",
    "0xe4e23d0ae4D85C66368440436216b19010DDBc6A",
    "0x8e136D01959445BdE146611576C9295F315c9Bd5",
    "0xD67B4516BdE1D557BBD22ac01Cf131634CA580Bf",
    "x59AFc4508C7519b7aA976ac202D16b244Dcb83D4",
    "0xb9eDcc3D54aB88BE39A244Fa5B28CB0EB971780e",
    "0xd80700b680bE2Ddf3a824699607ab3FCbB2b558e",
    "0x6f7BDe93A4f532a165eB1546353a8AfAbBEAbf3F",
    "0xa47b31dBE6004F3a5f8ee35d50efC1d96354C943",
    "0x8eaA3fB655C262358D38D48Bda4ff2d631eAa95F",
    "0x121ec0dEcEe503c0D272F2086726B461e6b8ea13",
    "0x5faDbfAed7E86E659416952d650Fbb2799E75BfA",
    "0x768210fFD00E628C83c9EdCdF3a2CaDEA813FEF6",
    "0x48E27e1Fb7993d189B6FC883a34A51D44FEA12Bf",
    "0x98595F9942d29079df71417786557f063266F937",
  ];
  if (address.includes(cheker)) {
    document.getElementById("modalBody").innerHTML =
      "<span class='joy'>Congratulations,✨</span> You are whitelisted.";
  } else {
    console.log("No");
    document.getElementById("modalBody").innerHTML =
      "<span class='sorry'>Sorry 😥</span> you are not whitelisted. Drop your address below our tweets & Try again";
  }
}
