const products = [ 
        // { 
        //         tag: "featured", 
        //         articleNumber: "514eef45-cab4-4ab8-8761-176bf133eb4c", 
        //         name: "Black coat", 
        //         description: "", 
        //         category: "Coats", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/black-coat.png" 
        // },
        // { 
        //         tag: "twoFor49", 
        //         articleNumber: "57b7b88a-df34-4ee6-99b3-1903405f2353", 
        //         name: "Leather dress", 
        //         description: "", 
        //         category: "Dresses", 
        //         price: 88, 
        //         rating: 5, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/black-dress.png" 
        // },
        // { 
        //         tag: "twoFor49", 
        //         articleNumber: "94b943e2-7fb6-410d-8b44-95809f6cc649", 
        //         name: "Cropped t-shirt & tights", 
        //         description: "", 
        //         category: "Sets", 
        //         price: 107, 
        //         rating: 3, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/black-set.png" 
        // },
        // { 
        //         tag: "",  
        //         articleNumber: "ed2a0b16-7f0c-427d-b3e8-415274dba3b0", 
        //         name: "Top & black suspenders", 
        //         description: "", 
        //         category: "Sets", 
        //         price: 115, 
        //         rating: 2, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/black-white-set.png" 
        // },
        // { 
        //         tag: "", 
        //         articleNumber: "eea2c1ed-840c-4bfc-9c32-8b13d99f1fee", 
        //         name: "Blue jacket", 
        //         description: "", 
        //         category: "Jackets", 
        //         price: 299, 
        //         rating: 4,  
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-jacket.png" 
        // },
        // { 
        //         tag: "featured", 
        //         articleNumber: "7e6b8076-f30d-407b-b167-d8a1f1d941ae", 
        //         name: "Hoodie & slim jeans", 
        //         description: "", 
        //         category: "Sets", 
        //         price: 150, 
        //         rating: 5, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-set.png" 
        // },
        // { 
        //         tag: "", 
        //         articleNumber: "b7fcb6b2-c034-4640-873e-87235ad14a38", 
        //         name: "Blue t-shirt", 
        //         description: "",  
        //         category: "T-shirts", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/blue-tshirt.png"
        // },
        // { 
        //         tag: "featured", 
        //         articleNumber: "8b2d5413-faf7-4126-a558-d44b8acce117", 
        //         name: "Short sleeve shirt", 
        //         description: "", 
        //         category: "Sweatshirts", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-sweater.png" 
        // },
        // { 
        //         tag: "featured", 
        //         articleNumber: "1ec87c35-13db-4750-b5e3-886cc02fe706", 
        //         name: "Brown watch", 
        //         description: "", 
        //         category: "Watches", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/brown-watch.png" 
        // },
        // { 
        //         tag: "featured", 
        //         articleNumber: "c723d9c4-4339-4170-9b01-a5ef474fd0c5", 
        //         name: "Silver stiletto", 
        //         description: "", 
        //         category: "Shoes", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/chrome-shoe.png" 
        // },
        // { 
        //         tag: "twoFor29", 
        //         articleNumber: "9f3527f4-f314-47c4-9e13-2fd357f5d701", 
        //         name: "Gray t-shirt", 
        //         description: "", 
        //         category: "T-shirts", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/gray-tshirt.png" 
        // },
        // { 
        //         tag: "twoFor49", 
        //         articleNumber: "a00d8af7-f52b-455e-bd1a-fdcd2cd92f46", 
        //         name: "Jeans suspenders", 
        //         description: "", 
        //         category: "Jeans", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-dress.png" 
        // },
        // { 
        //         tag: "featured", 
        //         articleNumber: "7c18a4c2-8fe1-4eec-a233-d318ce5e6798", 
        //         name: "Denim jacket & jeans", 
        //         description: "", 
        //         category: "Sets", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/jeans-set.png" 
        // },
        // { 
        //         tag: "twoFor29", 
        //         articleNumber: "4d325ac1-2594-4c1c-9512-d7ce31f443d3", 
        //         name: "Olive sweatshirt", 
        //         description: "",  
        //         category: "Sweatshirts", 
        //         price: 95, rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/olive-sweater.png" 
        // },
        // { 
        //         tag: "", 
        //         articleNumber: "17de1207-9901-4ec2-9a2d-c7ca2f73f20d", 
        //         name: "Tie dye t-shirt", 
        //         description: "", 
        //         category: "T-shirts", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/multicolor-tshirt.png" 
        // },
        // { 
        //         tag: "featured", 
        //         articleNumber: "4fc77638-7bb3-4d6f-ac0e-2d38cee29247", 
        //         name: "Purple handbag", 
        //         description: "", 
        //         category: "Bags", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/purple-bag.png" 
        // },
        // { 
        //         tag: "twoFor29", 
        //         articleNumber: "93814690-c9fe-4b82-9cac-2b5f92731e65", 
        //         name: "Red handbag", 
        //         description: "", 
        //         category: "Bags", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/red-bag.png" 
        // },
        // { 
        //         tag: "featured", 
        //         articleNumber: "5bb2569a-92a2-4ac3-99d6-84a858114277", 
        //         name: "Red dress", 
        //         description: "", 
        //         category: "Dresses", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/red-dress.png" 
        // },
        // { 
        //         tag: "twoFor29", 
        //         articleNumber: "87934928-92b5-469a-9947-3391c7e26184", 
        //         name: "Striped top", 
        //         description: "", 
        //         category: "Tops", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/striped-top.png" 
        // },
        // { 
        //         tag: "twoFor29",
        //         articleNumber: "5fedae21-f6a7-4bed-8a70-bc944717092b", 
        //         name: "Striped jumpsuit", 
        //         description: "", 
        //         category: "Pants", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/striped-pants.png" 
        // },
        // { 
        //         tag: "twoFor49", 
        //         articleNumber: "e528a645-fe3e-4892-8840-de2f568b41eb", 
        //         name: "White cardigan", 
        //         description: "", 
        //         category: "Tops", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/white-sweater.png" 
        // },
        // { 
        //         tag: "", 
        //         articleNumber:" 4009396d-05f1-4769-b627-d2e0a7778703", 
        //         name: "Winter boots", 
        //         description: "", 
        //         category: "Shoes", 
        //         price: 95, 
        //         rating: 4, 
        //         imageName: "https://win22imgstorage.blob.core.windows.net/images/winter-boots.png" 
        // }
]
module.exports = products
