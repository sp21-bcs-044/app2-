import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState,useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import PropertyCard from "../components/PropertyCard";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";
import { ModalContent } from "react-native-modals";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const PlacesScreen = () => {
  const route = useRoute();

  const data = [
    {
      id: "0",
      place: "Lahore",
      placeImage:
        "https://images.pexels.com/photos/7630190/pexels-photo-7630190.jpeg?auto=compress&cs=tinysrgb&w=800",
      shortDescription: "City in Punjab, Pakistan",
      properties: [
        {
          id: "10",
          name: "The Orchard Hotel",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipN3NSAiEHQk2J0pM7tuZsBI-u2tAYllBgazl_k=w592-h404-n-k-rw-no-v1",
          rating: 3.6,
          address:
            "1-A3, Main Mian Mehmood Ali Kasoori Rd, Lahore, 54660 Lahore, Pakistan ",
          oldPrice: 21500,
          newPrice: 16500,
          latitude: "13.0359",
          longitude: "77.6431",
          photos: [
            {
              id: "100",
              image:
                "https://lh3.googleusercontent.com/p/AF1QipOt-VCeNw_wyBycSBaeitqnU8VMQQHSIa-yPeI=w592-h404-n-k-rw-no-v1",
            },
            {
              id: "101",
              image:
                "https://lh3.googleusercontent.com/p/AF1QipP4A3admTZkszyLj_BZnUCrZtH4px1M0jhonZk=w592-h404-n-k-rw-no-v1",
            },
            {
              id: "102",
              image:
                "https://lh3.googleusercontent.com/p/AF1QipNzyGeQ67VTCc6dJ_VqCtEM2ELWO6x_fP1q7dk=w592-h404-n-k-rw-no-v1",
            },
            {
              id: "103",
              image:
                "https://lh3.googleusercontent.com/p/AF1QipNXG7_8sBiaZdMcajsJw0VxlK_dGN5UQP1r8kY=w592-h404-n-k-rw-no-v1",
            },
            {
              id: "104",
              image:
                "https://lh3.googleusercontent.com/p/AF1QipNXG7_8sBiaZdMcajsJw0VxlK_dGN5UQP1r8kY=w592-h404-n-k-rw-no-v1",
            },
            {
              id: "105",
              image:
                "https://lh3.googleusercontent.com/p/AF1QipPtaM0wIwyqZVk0KXaGrVqXMZ8L95aYazhBcxM=w592-h404-n-k-rw-no-v1",
            },
            {
              id: "106",
              image:
                "https://lh3.googleusercontent.com/p/AF1QipOHa_GfHPoyTUbg2PE6RxGhnhpioB37z2Qdlc4=w592-h404-n-k-rw-no-v1",
            },
            {
              id: "107",
              image:
                "https://lh3.googleusercontent.com/gps-proxy/AE4_-5GGdprMUPYL0L-GgY_X8Q1UVYlY6neNArmzQQhG0iMH2G-_UmYdMF_SNfYuAUTDvVrE4G-7DAv8UEr17gvIMCsHO43AvJO-QEnm_BwhMJLsb2nu7WwRxvqysfdDrxVBkznn203dLqVOzbbuXLfakOxbzK0UAUwm25KYaV8DcyVzLgzqTyuvUYtN0w=w592-h404-n-k-rw-no-v1",
            },
            {
              id: "108",
              image:
                "https://lh3.googleusercontent.com/p/AF1QipMGzklRcEI04qzK0U77Ozm9nUb01w1t-pqxcjs=w592-h404-n-k-rw-no-v1",
            },
            {
              id: "109",
              image: "2",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Two bedroom with balcony",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        {
          id: "11",
          image:
            "https://lh3.googleusercontent.com/gps-proxy/AE4_-5G2wFWYjBvk39hixF1HnxQAemViR-OUxEk93pVr77KrmlzvOQuSxrQrEALdODOwZVxlXMjh2mJP3s_HckBbTJFNsmbPELRvFcfl2Nrllh7P5q5RtlZgv6mRwlRToNRb6AFDNTf8UIMxoh0WsSxGDVWt2V7CVnGNV3y3o2MTPKB7p8_rZnGDm6374w=w592-h404-n-k-rw-no-v1",
          name: "Pearl Continental",
          rating: 4,
          address:
            " Shahrah-e-Quaid-e-Azam, G.O.R. - I, Lahore, Pakistan",
          oldPrice: 35000,
          newPrice: 32300,
          latitude: "12.9784",
          longitude: "77.6408",
          photos: [
            {
              id: "110",
              image:
                "https://lh3.googleusercontent.com/p/AF1QipOjGbPPbAjwEdOT17lPzpl1aHfC0Oom9GqLlST0=w592-h404-n-k-rw-no-v1",
            },
            {
              id: "111",
              image:
                "https://lh5.googleusercontent.com/proxy/Me9UwTSkF0LC8GMlusMicfLcLN-pQq0C5Hp0OK5khdRbK4C4PHBqHHPrlrY6jW2xp1GutElA0RI_qkpUGxRMPPIfren1s6hkO5WLsC3zP2OZU6DDgURNQURz7VVKf1Qu4cQQv9f9NRThV3sK0-LtJrLCB7-gCQ=w253-h146-k-no",
            },
            {
              id: "112",
              image:
                "https://lh4.googleusercontent.com/proxy/UhWvMdUTVRar-v0uCEdnpzwYio_aXpxP8K4hJX8f3z8Wv9Xry1nx7q9NTuF5NPmF_BcjS_AiypVPIn7M5k2efhea-F2gwER_riaPO15qOBTjdVu0_WG7stMfLsg2pxIh053BZtY1X6hn5x1KxC1NIUSz7_mJAM4=w253-h146-k-no",
            },
            {
              id: "113",
              image:
                "https://lh4.googleusercontent.com/proxy/yqD-MYIcj_R7SRijV3WOrjD1obF7rFt2_Vxm9L_E4IffZAQLJew91EtpkOG3M0JJ0wmUzSD8xEUDhOER0M9xvVPtS42iNcS37VIPxaybkWfrSgYeT5bXziAGAAeGTIW8zkJ9tgr2c-QC7aUfJHBlQQiARKHLP_E=w253-h146-k-no",
            },
            {
              id: "114",
              image:
                "https://lh6.googleusercontent.com/proxy/L7wlqYScQxPINx6u_aHFjHCcJXGaEz99koQd0QFKfmnzffQpTO3VjUZ8gBsRgD22dGfvt7Iv6MNcHsre3oryPQBAaK5nwZ6cpzPXX9R9aMmk9QNmRfH3-2c0DKNw13Thao5FK3v-LzibgLEowT9szak9W2L7S-U=w253-h168-k-no",
            },
            {
              id: "115",
              image:
                "https://lh3.googleusercontent.com/proxy/7tvSpcZXvrKiUyzwuROS6aNbxUC2XxRBPJNcTcUg_YJhH2lJZAN-CHz882BnxGXUzYW_IX_Ccjfz-COmgsWn5iBX0sFwL-hNIziGzh8n_3-N1u1r5RjBGvZ0lY5WLEo438BXNLrOE56krTtM-r6Gx2nr5zWLSg=w253-h168-k-no",
            },
            {
              id: "116",
              image:
                "https://lh3.googleusercontent.com/proxy/jzo1ohRPl-8VgJn8A_OevXQ8urcxGKy2kh5Doy4zQ6NJzUj3qiG1A9zqALnabKLaoa2VbzzrrFbIfHbAAyUoK4R88JeLnMajxW9doVTMdXZb3Ed1EelXe6yWnAEUhrJNNn5FPOzwqI3uG8xF6LKiLwo-ooEdqw8=w253-h189-k-no",
            },
            {
              id: "117",
              image:
                "https://lh3.googleusercontent.com/p/AF1QipNXG7_8sBiaZdMcajsJw0VxlK_dGN5UQP1r8kY=w592-h404-n-k-rw-no-v1",
            },
            {
              id: "118",
              image:
                "hhttps://lh3.googleusercontent.com/p/AF1QipPtaM0wIwyqZVk0KXaGrVqXMZ8L95aYazhBcxM=w592-h404-n-k-rw-no-v1",
            },
            {
              id: "119",
              image:
                "https://lh3.googleusercontent.com/p/AF1QipOHa_GfHPoyTUbg2PE6RxGhnhpioB37z2Qdlc4=w592-h404-n-k-rw-no-v1",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Deluxe king Room",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        {
          id: "12",
          name: "Royal Swiss Lahore",
          rating: 4.2,
          address:
            "Opposite Cargo Complex, Allama Iqbal International Airport, 54800 Lahore, Pakistan",
          oldPrice: 28400,
          newPrice: 23748,
          latitude: "13.1989",
          longitude: "77.7068",
          image:
            "https://lh3.googleusercontent.com/p/AF1QipOnD-IhpMtTucQc7k6EdrIaIZuJOzZZqBTd6a9V=w592-h404-n-k-rw-no-v1",
          photos: [
            {
              id: "120",
              image:
                "https://lh5.googleusercontent.com/p/AF1QipMuYCy7irRh-xln5T9ZtO7dq3SQDlmabxH0pfCm=w253-h189-k-no",
            },
            {
              id: "121",
              image:
                "https://lh6.googleusercontent.com/proxy/Lfa8V5gkKqFYiKyR49cXthP3E_oydJAwInn22ScdKay3luDRIXLIQuC9fBbrKmmiORmMjcM_0QESXUIcLeX9vDcfBxqxQAuyVu3a8KfTnTohqVgF6sdcJ_v1ssSTsWkJMPMjJMGmp_vO1n8cXATeYJMcqIyncA=w253-h168-k-no",
            },
            {
              id: "122",
              image:
                "https://lh5.googleusercontent.com/p/AF1QipNdp5RIp9Iom-ZkiITy1slgB20iQFcvFr6SEn7e=w253-h168-k-no",
            },
            {
              id: "123",
              image:
                "https://lh6.googleusercontent.com/proxy/KTS0B379vihOY9Tsn30h3o-1gWe8JG5hN7kZlPES5gEO0oTbb5U234b4GWjc_erDPBPnGsWDl7IiGXm5LBb9GvuyJvuWZJDDhYw7m8L0rhRCRmEMvj0MvHwm80x1TDagX6UT7LoWPnTqyiBCQoDJxuSPRs7VzHI=w253-h168-k-no",
            },
            {
              id: "124",
              image:
                "https://lh6.googleusercontent.com/proxy/7E4Cz0GIaliK46ToZLqZio5PGuw-xVCqDtAEWkc8fcyfFCpl0jdp4lENRR2JK6Qa2VsXUEz5otVjQUZGLYlu7uEfZt-C1OYFauc4dinNY72wk_GzjmzVPP5mQfHwjtj_3uRQRUeAoBQ8sJ2uJeHfh6XG3nddXw=w253-h168-k-no",
            },
            {
              id: "125",
              image:
                "https://lh5.googleusercontent.com/p/AF1QipOlbRgLN_SO6TDVOaGlHMXaNIg_bJsNUYOu0OZ_=w253-h168-k-no",
            },
            {
              id: "126",
              image:
                "https://lh5.googleusercontent.com/p/AF1QipN4aJGiKPSyMv0dVAV-l4JK6TvSRyZw0NUtS8H1=w253-h168-k-no",
            },
            {
              id: "128",
              image:
                "https://lh5.googleusercontent.com/p/AF1QipO8-8KqmHJN3temP7Fw3OgikD3ef-ql5_mvWEjf=w253-h168-k-no",
            },
            {
              id: "129",
              image:
                "https://lh5.googleusercontent.com/p/AF1QipMJYkwPLHKmy_nw9CfVbCpn7_XJtKk6MlUX7y9F=w253-h155-k-no",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Deluxe king Room",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      place: "Hyderabad",
      placeImage:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR-colCFkAi4Oy7eC25i032foqQBmFZoeEHr8Gi0V0-8sxmDIAXH7wPwbpMdbYWipqfzB5oQBg&s=19",
      shortDescription: "City in Sindh, Pakistan",
      properties: [
        {
          id: "20",
          name: "Indus Hotel",
          rating: 3.5,
          address:
            "Thandi Sarak، opposite Niaz Stadium, GOR Colony, Hyderabad, Sindh 71000 Pakistan",
          oldPrice: 28532,
          newPrice: 23532,
          photos: [
            {
              id: "140",
              image:
                "https://lh3.googleusercontent.com/gps-proxy/AE4_-5E2g0c1TtH43duqaswMcA4TRxTlJ-y2QZhUBiKAUyIsGPSJYw6geIrJ0Sriyabc6JoKbr6JuXYAE2-S0SmiTk6IXS91ierbD4mvxH27skw9sG5oDKp-jKsy8m3bGwgMyQdVpYyeH2ckoWRHAGZhHIOoMfvmE825p_RZuMTXrflD1NV1AhKfxuGuVQ=w592-h404-n-k-rw-no-v1",
            },
            {
              id: "141",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814179.jpg?k=12c76ec416673fc09ae8085250cebd14928b35671e9d72f782da4256c394f610&o=&hp=1",
            },
            {
              id: "142",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814188.jpg?k=530786e8585f567d1dee1e0e7cfdc551063c3c154d3f161d11674ee16f78b4c7&o=&hp=1",
            },
            {
              id: "143",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814184.jpg?k=192eee45d30ae6425619495061c922330745cc1cf57bf65d6da6f9fa481b6f22&o=&hp=1",
            },
            {
              id: "144",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814185.jpg?k=2217db46e371a47298bc3feee62357acda5bf2802f2042ebfa5b35b9cabc85ed&o=&hp=1",
            },
            {
              id: "145",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814187.jpg?k=e752022ae6b6701448156f8b5101b1d7dbf5176f405ce60573ad633a57028efc&o=&hp=1",
            },
            {
              id: "146",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814182.jpg?k=f6129a926e1d863bc29d0dbf0eb6650ddfff6a5ca12b2b967cd7661babe8ca97&o=&hp=1",
            },
            {
              id: "147",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814170.jpg?k=7c51fee51c3b222aff367a41ab640e9cb794ae339e407dfb38bb45f7320dc91e&o=&hp=1",
            },
            {
              id: "148",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814168.jpg?k=270c0b95619412803742ebdcea2c03203f1f26a06ea797ad715a0a0b24fe85fa&o=&hp=1",
            },
            {
              id: "149",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814197.jpg?k=ca3eec900001077869d3591221f306025775cca085d91a0bcae3b722484c8b6e&o=&hp=1",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Deluxe king Room",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        {
          id: "22",
          name: "Hotel Crown Hyderabad",
          rating: 4.5,
          address:
            "A/21 Block C, Auto Bahn Rd, Latifabad No 7 Latifabad Unit 7 Latifabad, Hyderabad, Sindh 71000",
          oldPrice: 18000,
          newPrice: 11300,
          photos: [
            {
              id: "160",
              image:
                "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR-colCFkAi4Oy7eC25i032foqQBmFZoeEHr8Gi0V0-8sxmDIAXH7wPwbpMdbYWipqfzB5oQBg&s=19",
            },
            {
              id: "161",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258918.jpg?k=0e9b069b0719ba5cdbfba03fa7420a8c6096dad9c699c2a1baca3d1f7c80d2f1&o=&hp=1",
            },
            {
              id: "162",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244257685.jpg?k=70dc1dfb4f8f5abde720afc61fcc757d76567f4a293c486206de5fc81119686c&o=&hp=1",
            },
            {
              id: "163",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258924.jpg?k=1f98c00674333999f29ce3b095eece29069f8304bf7697467a405b417132ee5f&o=&hp=1",
            },
            {
              id: "164",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258928.jpg?k=8e03b53ddf32342bdac53e3aa1cb92aae88496e8afa8fbb1f62fa6e8f023ec2c&o=&hp=1",
            },
            {
              id: "165",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258926.jpg?k=8935acba4ff9588ea20674cffd5f309f8862aa6950a1dddc99d79e9afe16cde5&o=&hp=1",
            },
            {
              id: "166",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258921.jpg?k=95be913693f4ec3cbae9e30f525a2b03a6e61d0aa2e2fdb1bf0a6f00362dcbad&o=&hp=1",
            },
            {
              id: "167",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244257008.jpg?k=7e3939fc4b54b7752f476f6f819e12a0054659b0ce4a9d6414c0b2db310e175e&o=&hp=1",
            },
            {
              id: "168",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244257005.jpg?k=7eff1e1de6cec34762fa374c083ff27189acdd8410a1d36f110d099921b6df84&o=&hp=1",
            },
            {
              id: "169",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258932.jpg?k=abdca02df16c21de889f9a0790ec6bece09a9fce92550079baa0e1eebf9b8f80&o=&hp=1",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Deluxe king Room",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
      ],
    },
  ];
  const navigation = useNavigation();
  const [modalVisibile, setModalVisibile] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  const filters = [
    {
      id: "0",
      filter: "cost:Low to High",
    },
    {
      id: "1",
      filter: "cost:High to Low",
    },
  ];

  const searchPlaces = data?.filter((item) => item.place === route.params.place);
  const [sortedData,setSortedData] = useState(data);
  console.log(searchPlaces)

  const compare = (a,b) => {
    if(a.newPrice > b.newPrice){
      return -1;
    }
    if(a.newPrice < b.newPrice){
      return 1;
    }
    return 0;
  }

  const comparision = (a,b) => {
    if(a.newPrice < b.newPrice){
      return -1;
    }
    if(a.newPrice > b.newPrice){
      return 1;
    }
    return 0;
  }

  const applyFilter = (filter) => {
    setModalVisibile(false)
    switch(filter){
      case "cost:High to Low":
        searchPlaces.map((val) => val.properties.sort(compare));
        setSortedData(searchPlaces);
        break;
      case "cost:Low to High":
        searchPlaces.map((val) => val.properties.sort(comparision));
        setSortedData(searchPlaces);
        break;
    }
  }

  console.log(route.params);
 
  return (
    <View>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          padding: 12,
          backgroundColor: "white",
        }}
      >
        <Pressable
          onPress={() => setModalVisibile(!modalVisibile)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Octicons name="arrow-switch" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Sort
          </Text>
        </Pressable>

        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="filter" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Filter
          </Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Map",{
          searchResults:searchPlaces,
        })} style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome5 name="map-marker-alt" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Map
          </Text>
        </Pressable>
      </Pressable>

    
        <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
        {sortedData
          ?.filter((item) => item.place === route.params.place)
          .map((item) =>
            item.properties.map((property, index) => (
              <PropertyCard
                key={index}
                rooms={route.params.rooms}
                children={route.params.children}
                adults={route.params.adults}
                selectedDates={route.params.selectedDates}
                property={property}
                availableRooms={property.rooms}
              />
            ))
          )}
      </ScrollView>
     

    

      <BottomModal
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        footer={
          <ModalFooter>
            <Pressable
            onPress={() => applyFilter(selectedFilter)}
              style={{
                paddingRight: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginVertical: 10,
                marginBottom:30
              }}
            >
              <Text>Apply</Text>
            </Pressable>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Sort and Filter" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 280 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginVertical: 10,
                flex: 2,
                height: 280,
                borderRightWidth: 1,
                borderColor: "#E0E0E0",
              }}
            >
              <Text style={{ textAlign: "center" }}>Sort </Text>
            </View>

            <View style={{ flex: 3, margin: 10 }}>
              {filters.map((item, index) => (
                <Pressable
                  onPress={() => setSelectedFilter(item.filter)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                  key={index}
                >
                    {selectedFilter.includes(item.filter) ? (
                        <FontAwesome name="circle" size={18} color="green" />
                    ) : (
                        <Entypo name="circle" size={18} color="black" />
                    )}
                  
                  <Text
                    style={{ fontSize: 16, fontWeight: "500", marginLeft: 6 }}
                  >
                    {item.filter}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({});
