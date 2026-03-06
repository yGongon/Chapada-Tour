export interface Room {
  id: string;
  slug: string;
  name: string;
  desc: string;
  img: string;
  images?: string[];
  price: string;
  capacity: string;
  amenities: string[];
  bathroom: string[];
  roomAmenities: string[];
  observations: string;
}

export const rooms: Room[] = [
  {
    id: "1",
    slug: "quarto-duplo-banheiro-compartilhado",
    name: "Quarto Duplo com Banheiro Compartilhado",
    desc: "Uma opção econômica e funcional, ideal para quem busca praticidade e uma localização privilegiada no centro de Lençóis.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733624523.jpg?k=5e780033861f4d5422d73e745efffe1a694f7d5a341a89256083ce03b326945e&o=",
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733624523.jpg?k=5e780033861f4d5422d73e745efffe1a694f7d5a341a89256083ce03b326945e&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733624539.jpg?k=eb3a54a1d5b185e77ae50f05d5d269b535194e1c9de2584d2fcaad6078123c2d&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733624563.jpg?k=75b765ede73d73e0a89c8ffd1d3dfe776d3fb115ead1a1d521fc79682928d260&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733624580.jpg?k=e7b220aa8ffb64b71b11d378a4b6477e8744d84c696b7a42a6ad8371ae4d4fbd&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733624670.jpg?k=9959954fafc2c7dce2205d35dd3967f1cf7327695a0c2cf86551680e31d51eb1&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733023829.jpg?k=9af71ae6e701b19b3f37e71d44818b7f1a12498e6f8ef3129e0f8be1147ebb01&o="
    ],
    price: "R$ 80",
    capacity: "Até 2 pessoas",
    amenities: ["Wi-Fi gratuito", "1 cama de casal", "Não é permitido fumar"],
    bathroom: ["Banheiro Compartilhado", "Produtos de higiene pessoal gratuitos", "Chuveiro", "Vaso sanitário", "Toalhas", "Papel higiênico", "Roupa de cama e banho (custo adicional)"],
    roomAmenities: ["Ventilador", "Ambiente simples e funcional", "Ideal para quem busca economia"],
    observations: "Este quarto possui banheiro compartilhado com outros hóspedes. Recomendado para quem preza por boa localização e custo-benefício."
  },
  {
    id: "2",
    slug: "quarto-duplo-com-varanda",
    name: "Quarto Duplo com Varanda",
    desc: "Conforto e uma vista encantadora da cidade. Perfeito para casais que buscam privacidade e um ambiente arejado.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/678755318.jpg?k=6079a649c2ec477d68114e04d9c35e28d6df3658da7b5c5a6ba68e167eac37be&o=",
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/678755318.jpg?k=6079a649c2ec477d68114e04d9c35e28d6df3658da7b5c5a6ba68e167eac37be&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/678755361.jpg?k=f2ce4e5b4685e3c2284dbe5b9bbe78fd019d77b6d913216e6d6b575d59d58638&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/678755334.jpg?k=c790ff1c9c9a0bdff7a7c53dae42a33ee368383a7a9aed8440e82afa089cf7c4&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/678755077.jpg?k=fbd7bf5863fb7ba643b8fcfa998b1cc43beedb44ecf949ff20d37e6528e507db&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/678755065.jpg?k=b3d2a74efb62e3e2135cb4f36a55c148887592c2aaa15940cc2bb73f2be80da8&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/678755206.jpg?k=bbaee35530c00e6f76af63d6d08feef79c470c790be41aa41aee3cbd786cdf27&o="
    ],
    price: "R$ 120",
    capacity: "Até 2 pessoas",
    amenities: ["Wi-Fi gratuito", "1 cama de casal", "Vista da cidade", "Não é permitido fumar"],
    bathroom: ["Banheiro Privativo", "Produtos de higiene pessoal gratuitos", "Chuveiro", "Vaso sanitário", "Toalhas", "Papel higiênico", "Roupa de cama e banho (custo adicional)"],
    roomAmenities: ["Varanda privativa", "Vista da cidade", "Ventilador", "Roupa de cama incluída"],
    observations: "Este quarto é ideal para casais que desejam uma estadia confortável com vista da cidade e varanda privativa. Conta com banheiro privativo e ambiente ventilado."
  },
  {
    id: "3",
    slug: "quarto-triplo-com-varanda",
    name: "Quarto Triplo com Varanda",
    desc: "Espaço amplo para grupos ou famílias, com o diferencial de uma varanda privativa e vista privilegiada.",
    img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733589475.jpg?k=428b76bcfce15d844d6950e6be8f8dc4de4002363778899abcb418f1bcf88173&o=",
    images: [
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733589475.jpg?k=428b76bcfce15d844d6950e6be8f8dc4de4002363778899abcb418f1bcf88173&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733590080.jpg?k=647f5801144459fcf868a3ea6652f58e00c6cea7c20d38458d503b2e1e5c2075&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733590047.jpg?k=119a2f41dc136601b293ce99040e6e20501835b1963f01d23b5d50769993bac8&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733589866.jpg?k=88aac8c3efa8b4d11e5e1d98b69d052e2321eea15a152a88d33bc206ada7f052&o=",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/733589359.jpg?k=184450296c7753f228977f4b8864c862dfe80ea0a3ca665166eefb1dcd7b6a66&o="
    ],
    price: "R$ 160",
    capacity: "Até 3 pessoas",
    amenities: ["Wi-Fi gratuito", "1 cama de solteiro e 2 camas de casal", "Não é permitido fumar"],
    bathroom: ["Banheiro Privativo", "Chuveiro", "Vaso sanitário", "Toalhas", "Papel higiênico"],
    roomAmenities: ["Varanda", "Roupa de cama", "Ventilador", "Vista da cidade"],
    observations: "Este quarto triplo possui banheiro privativo com chuveiro e varanda com vista para a cidade. Ideal para grupos ou famílias que desejam conforto e uma bela vista."
  }
];
