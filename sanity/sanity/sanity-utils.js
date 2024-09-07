import { createClient, groq } from "next-sanity";


export const client = createClient({

    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    dataset: 'production',
    title: "magpietours",
    apiVersion: '2024-01-08',
    useCdn:false,
    
}); 


export const  getBanner= async ()=> {

    

    return client.fetch(
        groq`*[_type == "banner"]{
            image,
            title,
            description,
        }`
    )
}



export const  getReview= async ()=> {

    

    return client.fetch(
        groq`*[category == "review"]{
            user_name,
            remarks,
            country,
            Userimage,
        }`
    )
}

export const  getLandscapeTours= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "sangemarmar-sar-climbing-expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
            price,
        }`
    )
}




// Landscapes

export const  getLandscape= async ()=> {

    

    return client.fetch(
        groq`*[category == "landscape" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
            price,
        }`
    )
}


export const  getHunzaSkurdu= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "ultimate-skardu-and-hunza-valley" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
            
        }`
    )
}

export const  getColorsOfNorth= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "colors-of-north" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
            
        }`
    )
}

export const  getHunzaRetreat= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "heavenly-hunza-retreat" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
            
        }`
    )
}

export const  getNorthBlossom= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "northern-pakistan-spring-blossoms" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
            
        }`
    )
}


export const  getAlpineFloraDiscovery= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "alpine-flora-discovery" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}



export const  getKalashFestivals= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "kalash-festivals" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
            
        }`
    )
}

export const  getChitralGilgit= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "chitral-gilgit-road-story" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}


export const  getKKHSilkRoute= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "kkh-silk-route-south-bound" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getPeshawarNorth= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "peshawar-and-northern-journey-365-days-a-year" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}
43
// Heritage

export const  getHeritageTours= async ()=> {

    

    return client.fetch(
        groq`*[category == "heritage" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getIndusCivilization = async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "indus-valley-civilization" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getHistoryPak= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "history-across-pakistan" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getGandaharaCivil= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "ghandaharan-civilization" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}


// trekking

export const  getTrekkingTours= async ()=> {

    

    return client.fetch(
        groq`*[category == "trekking" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getMuchuchishh= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "muchuchishh-base-camp-trek" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}


export const  getNangaparbatRposhi= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "nangaparbat-and-rakaposhi-base-camp-trek" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}


export const  getFairyMeadowsShimshal= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "fairy-meadows-shimashal-valley" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getK2Broadpeak= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "k2-and-broad-peak-basecamp-trek" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getNagmaValley= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "nangma-valley-skardu-trekk" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getRushLakePassu= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "rush-lake-trek-and-passu-glacier-hike" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getShishperMeadows= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "shishper-meadows-trek-and-passu-glacier-hike" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}


// Climbing

export const  getClimbingTours= async ()=> {

    

    return client.fetch(
        groq`*[category == "Expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getExpK2= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "k-2-climbing-expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getExpBroeadPeak= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "broad-peak-climbing-expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getExpSpantik= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "spantik-peak-climbing-expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getExpMuchuchish= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "muchuchishh-climbing-expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}


export const  getExpSangemarmar= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "sangemarmar-sar-climbing-expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getExpKunyang= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "kunyang-chis-climbing-expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getExpKoranKoh= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "koran-koh-climbing-expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getExpNangaParbat= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "nanga-parbat-climbing-expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}


// Custom/Private Tours

export const  getCustomTours= async ()=> {

    

    return client.fetch(
        groq`*[category == "tailored tours" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}


export const  getBussinesTrade= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "muchuchishh-climbing-expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getCorporateTours= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "muchuchishh-climbing-expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getPrivateEscapes= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "muchuchishh-climbing-expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getItalian1= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "muchuchishh-climbing-expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getItalian2= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "muchuchishh-climbing-expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getItalian3= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "muchuchishh-climbing-expedition" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}


// skiing tours

export const  getSkiBarTair= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "ski-bar-tair" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}


export const  getSkiShopdinPass= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "ski-shopdin-pass" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}


export const  getDeosaiBar= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "ski-deosai-bar-tair" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}


export const  getCustomSki= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "customised-ski" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}


// GemStone Tours

export const  getGemStoneSafari= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "gemstone-safari" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

export const  getGemStoneTours= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "gemstone-trade-trip" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}

// Retreats 

export const  getCorporateRetreats= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "corporate-retreats" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}


export const  getYogaRetreats= async ()=> {

    

    return client.fetch(
        groq`*[slug.current == "yoga-retreats" ]{
            name,
            category,
            slug,
            overview,
            Itenary,
            Services_Included,
            Not_Included,
            Notes,
            Slider_Images,
            cardimage,
            url,
            map,
            duration,
            activities,
            destination,
            guide,
            calender,
            price,
        }`
    )
}