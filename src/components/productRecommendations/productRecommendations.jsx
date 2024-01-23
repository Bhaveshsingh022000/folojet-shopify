import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Card, CardMedia, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./productRecommendations.scss";

const PRODUCTS_DATA = {
  data: {
    products: {
      edges: [
        {
          node: {
            id: "gid://shopify/Product/9006154940708",
            title: "The Videographer Snowboard",
            onlineStoreUrl: null,
            media: {
              edges: [
                {
                  node: {
                    alt: "The top and bottom view of a snowboard. The top has view is turquoise and black with graphics of\n        trees. The bottom view is turquoise with the word hydrogen written in cursive.",
                    mediaContentType: "IMAGE",
                    id: "gid://shopify/MediaImage/38805476835620",
                    image: {
                      altText:
                        "The top and bottom view of a snowboard. The top has view is turquoise and black with graphics of\n        trees. The bottom view is turquoise with the word hydrogen written in cursive.",
                      originalSrc:
                        "https://cdn.shopify.com/s/files/1/0850/6789/0980/files/Main.jpg?v=1703917102",
                    },
                  },
                },
                {
                  node: {
                    alt: "Video of the Snowboard.",
                    mediaContentType: "EXTERNAL_VIDEO",
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            id: "gid://shopify/Product/9006155039012",
            title: "The Collection Snowboard: Hydrogen",
            onlineStoreUrl: null,
            media: {
              edges: [
                {
                  node: {
                    alt: "Top and bottom view of a snowboard. The top view shows stylized hydrogen bonds and the bottom view\n        shows “H2” in a brush script typeface.",
                    mediaContentType: "IMAGE",
                    id: "gid://shopify/MediaImage/38805477032228",
                    image: {
                      altText:
                        "Top and bottom view of a snowboard. The top view shows stylized hydrogen bonds and the bottom view\n        shows “H2” in a brush script typeface.",
                      originalSrc:
                        "https://cdn.shopify.com/s/files/1/0850/6789/0980/products/Main_0a40b01b-5021-48c1-80d1-aa8ab4876d3d.jpg?v=1703917102",
                    },
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            id: "gid://shopify/Product/9006155071780",
            title: "The Complete Snowboard",
            onlineStoreUrl: null,
            media: {
              edges: [
                {
                  node: {
                    alt: "Top and bottom view of a snowboard. The top view shows abstract circles and lines in shades of teal.\n          The bottom view shows abstract circles and lines in shades of purple and blue with the text “SHOPIFY” in a\n          sans serif typeface on top.",
                    mediaContentType: "IMAGE",
                    id: "gid://shopify/MediaImage/38805477064996",
                    image: {
                      altText:
                        "Top and bottom view of a snowboard. The top view shows abstract circles and lines in shades of teal.\n          The bottom view shows abstract circles and lines in shades of purple and blue with the text “SHOPIFY” in a\n          sans serif typeface on top.",
                      originalSrc:
                        "https://cdn.shopify.com/s/files/1/0850/6789/0980/products/Main_589fc064-24a2-4236-9eaf-13b2bd35d21d.jpg?v=1703917102",
                    },
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            id: "gid://shopify/Product/9006155137316",
            title: "The Out of Stock Snowboard",
            onlineStoreUrl: null,
            media: {
              edges: [
                {
                  node: {
                    alt: "Top and bottom view of a snowboard. The top view shows a toggle at the top in shades of blue and\n        yellow. The bottom view shows an abstract illustration of toggles in blues and yellows.",
                    mediaContentType: "IMAGE",
                    id: "gid://shopify/MediaImage/38805477130532",
                    image: {
                      altText:
                        "Top and bottom view of a snowboard. The top view shows a toggle at the top in shades of blue and\n        yellow. The bottom view shows an abstract illustration of toggles in blues and yellows.",
                      originalSrc:
                        "https://cdn.shopify.com/s/files/1/0850/6789/0980/products/Main_f44a9605-cd62-464d-b095-d45cdaa0d0d7.jpg?v=1703917102",
                    },
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            id: "gid://shopify/Product/9006155170084",
            title: "Gift Card",
            onlineStoreUrl: null,
            media: {
              edges: [
                {
                  node: {
                    alt: "Gift card that shows text: Generated data gift card",
                    mediaContentType: "IMAGE",
                    id: "gid://shopify/MediaImage/38805477163300",
                    image: {
                      altText:
                        "Gift card that shows text: Generated data gift card",
                      originalSrc:
                        "https://cdn.shopify.com/s/files/1/0850/6789/0980/products/gift_card.png?v=1703917102",
                    },
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            id: "gid://shopify/Product/9006155202852",
            title: "The Inventory Not Tracked Snowboard",
            onlineStoreUrl: null,
            media: {
              edges: [
                {
                  node: {
                    alt: "Top and bottom view of a snowboard. The top view shows a centred hexagonal logo for Hydrogen that\n          appears to radiate outwards, as well as some overlapping hexagons at the bottom. The bottom view shows an\n          abstract angular grid in purples.",
                    mediaContentType: "IMAGE",
                    id: "gid://shopify/MediaImage/38805477196068",
                    image: {
                      altText:
                        "Top and bottom view of a snowboard. The top view shows a centred hexagonal logo for Hydrogen that\n          appears to radiate outwards, as well as some overlapping hexagons at the bottom. The bottom view shows an\n          abstract angular grid in purples.",
                      originalSrc:
                        "https://cdn.shopify.com/s/files/1/0850/6789/0980/products/snowboard_purple_hydrogen.png?v=1703917102",
                    },
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            id: "gid://shopify/Product/9006155268388",
            title: "The Multi-location Snowboard",
            onlineStoreUrl: null,
            media: {
              edges: [
                {
                  node: {
                    alt: "Top and bottom view of a snowboard. The top view shows a pixelated Shopify bag logo and a pixelated\n          character reviewing a clipboard with a questioning expression with a bright green-blue background. The bottom\n          view is a pattern of many pixel characters with a bright green-blue background.",
                    mediaContentType: "IMAGE",
                    id: "gid://shopify/MediaImage/38805477261604",
                    image: {
                      altText:
                        "Top and bottom view of a snowboard. The top view shows a pixelated Shopify bag logo and a pixelated\n          character reviewing a clipboard with a questioning expression with a bright green-blue background. The bottom\n          view is a pattern of many pixel characters with a bright green-blue background.",
                      originalSrc:
                        "https://cdn.shopify.com/s/files/1/0850/6789/0980/products/Main_0a4e9096-021a-4c1e-8750-24b233166a12.jpg?v=1703917102",
                    },
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            id: "gid://shopify/Product/9006155301156",
            title: "The Compare at Price Snowboard",
            onlineStoreUrl: null,
            media: {
              edges: [
                {
                  node: {
                    alt: "Top and bottom view of a snowboard. The top view shows pixelated clouds, with the top-most one being\n        the shape of the Shopify bag logo. The bottom view has a pixelated cloudy sky with blue, pink and purple\n        colours.",
                    mediaContentType: "IMAGE",
                    id: "gid://shopify/MediaImage/38805477294372",
                    image: {
                      altText:
                        "Top and bottom view of a snowboard. The top view shows pixelated clouds, with the top-most one being\n        the shape of the Shopify bag logo. The bottom view has a pixelated cloudy sky with blue, pink and purple\n        colours.",
                      originalSrc:
                        "https://cdn.shopify.com/s/files/1/0850/6789/0980/products/snowboard_sky.png?v=1703917102",
                    },
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            id: "gid://shopify/Product/9006155333924",
            title: "The 3p Fulfilled Snowboard",
            onlineStoreUrl: null,
            media: {
              edges: [
                {
                  node: {
                    alt: "Top and bottom view of a snowboard. The top view shows 7 stacked hexagons and the bottom view shows\n          a small, centred hexagonal logo for Hydrogen.",
                    mediaContentType: "IMAGE",
                    id: "gid://shopify/MediaImage/38805477327140",
                    image: {
                      altText:
                        "Top and bottom view of a snowboard. The top view shows 7 stacked hexagons and the bottom view shows\n          a small, centred hexagonal logo for Hydrogen.",
                      originalSrc:
                        "https://cdn.shopify.com/s/files/1/0850/6789/0980/products/Main_b9e0da7f-db89-4d41-83f0-7f417b02831d.jpg?v=1703917102",
                    },
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            id: "gid://shopify/Product/9006155366692",
            title: "The Multi-managed Snowboard",
            onlineStoreUrl: null,
            media: {
              edges: [
                {
                  node: {
                    alt: "Top and bottom view of a snowboard. The top view shows an illustration with varied outlined shapes\n          in black. The bottom view shows a black box character with an H pointing, and surrounded by black outlined\n          illustrative elements.",
                    mediaContentType: "IMAGE",
                    id: "gid://shopify/MediaImage/38805477359908",
                    image: {
                      altText:
                        "Top and bottom view of a snowboard. The top view shows an illustration with varied outlined shapes\n          in black. The bottom view shows a black box character with an H pointing, and surrounded by black outlined\n          illustrative elements.",
                      originalSrc:
                        "https://cdn.shopify.com/s/files/1/0850/6789/0980/products/Main_9129b69a-0c7b-4f66-b6cf-c4222f18028a.jpg?v=1703917102",
                    },
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            id: "gid://shopify/Product/9006155432228",
            title: "The Collection Snowboard: Oxygen",
            onlineStoreUrl: null,
            media: {
              edges: [
                {
                  node: {
                    alt: "Top and bottom view of a snowboard. The top view shows a stylized scene of trees, mountains, sky and\n        a sun in red colours. The bottom view has blue wavy lines in the background with the text “Oxygen” in a\n        stylized script typeface.",
                    mediaContentType: "IMAGE",
                    id: "gid://shopify/MediaImage/38805477490980",
                    image: {
                      altText:
                        "Top and bottom view of a snowboard. The top view shows a stylized scene of trees, mountains, sky and\n        a sun in red colours. The bottom view has blue wavy lines in the background with the text “Oxygen” in a\n        stylized script typeface.",
                      originalSrc:
                        "https://cdn.shopify.com/s/files/1/0850/6789/0980/products/Main_d624f226-0a89-4fe1-b333-0d1548b43c06.jpg?v=1703917103",
                    },
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            id: "gid://shopify/Product/9006155530532",
            title: "The Collection Snowboard: Liquid",
            onlineStoreUrl: null,
            media: {
              edges: [
                {
                  node: {
                    alt: "Top and bottom view of a snowboard. The top view shows a stylized scene of water, trees, mountains,\n        sky and a moon in blue colours. The bottom view has a blue liquid, drippy background with the text “liquid” in\n        a stylized script typeface.",
                    mediaContentType: "IMAGE",
                    id: "gid://shopify/MediaImage/38805477523748",
                    image: {
                      altText:
                        "Top and bottom view of a snowboard. The top view shows a stylized scene of water, trees, mountains,\n        sky and a moon in blue colours. The bottom view has a blue liquid, drippy background with the text “liquid” in\n        a stylized script typeface.",
                      originalSrc:
                        "https://cdn.shopify.com/s/files/1/0850/6789/0980/products/Main_b13ad453-477c-4ed1-9b43-81f3345adfd6.jpg?v=1703917105",
                    },
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            id: "gid://shopify/Product/9006155596068",
            title: "Selling Plans Ski Wax",
            onlineStoreUrl: null,
            media: {
              edges: [
                {
                  node: {
                    alt: "A bar of golden yellow wax",
                    mediaContentType: "IMAGE",
                    id: "gid://shopify/MediaImage/38805477622052",
                    image: {
                      altText: "A bar of golden yellow wax",
                      originalSrc:
                        "https://cdn.shopify.com/s/files/1/0850/6789/0980/products/snowboard_wax.png?v=1703917105",
                    },
                  },
                },
                {
                  node: {
                    alt: "A bar of purple wax",
                    mediaContentType: "IMAGE",
                    id: "gid://shopify/MediaImage/38805477654820",
                    image: {
                      altText: "A bar of purple wax",
                      originalSrc:
                        "https://cdn.shopify.com/s/files/1/0850/6789/0980/products/wax-special.png?v=1703917105",
                    },
                  },
                },
                {
                  node: {
                    alt: "a small cube of wax",
                    mediaContentType: "IMAGE",
                    id: "gid://shopify/MediaImage/38805477687588",
                    image: {
                      altText: "a small cube of wax",
                      originalSrc:
                        "https://cdn.shopify.com/s/files/1/0850/6789/0980/products/sample-normal-wax.png?v=1703917105",
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    },
  },
};

const ProductRecommendations = () => {
  console.log(PRODUCTS_DATA);
  return (
    <div className="product-recommendation">
        <h1>Recommendations</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {PRODUCTS_DATA.data.products.edges.map((data) => (
          <SwiperSlide>
            <div>
              <img src={data.node.media.edges[0].node.image.originalSrc} />
              <p>{data.node.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductRecommendations;
