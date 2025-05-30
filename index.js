const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simulación de una base de datos
const plants = [
    {
        id: 1,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Monstera_deliciosa2.jpg/800px-Monstera_deliciosa2.jpg",
        commonName: "Swiss Cheese Plant",
        scientificName: "Monstera deliciosa",
        description: "Tropical plant with large perforated leaves. Easy to care for and air-purifying.",
        lightRequirement: "Bright indirect light",
        wateringFrequency: "When top 2-3 inches of soil are dry",
        humidityPercentage: "60-80%"
    },
    {
        id: 2,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Spathiphyllum_wallisii_plant.jpg/800px-Spathiphyllum_wallisii_plant.jpg",
        commonName: "Peace Lily",
        scientificName: "Spathiphyllum wallisii",
        description: "Elegant white flowers and strong air-purifying abilities.",
        lightRequirement: "Low to medium indirect light",
        wateringFrequency: "When top inch of soil is dry",
        humidityPercentage: "50-70%"
    },
    {
        id: 3,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sansevieria_trifasciata_%27Laurentii%27.jpg/800px-Sansevieria_trifasciata_%27Laurentii%27.jpg",
        commonName: "Snake Plant",
        scientificName: "Dracaena trifasciata",
        description: "Hardy, drought-tolerant, and perfect for beginners.",
        lightRequirement: "Low to bright indirect light",
        wateringFrequency: "Every 2-4 weeks (let soil dry completely)",
        humidityPercentage: "30-50%"
    },
    {
        id: 4,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Aloe_vera_%28flower%29.jpg/800px-Aloe_vera_%28flower%29.jpg",
        commonName: "Aloe Vera",
        scientificName: "Aloe barbadensis miller",
        description: "Medicinal succulent used for burns. Requires minimal watering.",
        lightRequirement: "Bright direct to indirect light",
        wateringFrequency: "Every 2-4 weeks (let soil dry completely)",
        humidityPercentage: "20-40%"
    },
    {
        id: 5,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Zamioculcas_zamiifolia_Plant_01.jpg/800px-Zamioculcas_zamiifolia_Plant_01.jpg",
        commonName: "ZZ Plant",
        scientificName: "Zamioculcas zamiifolia",
        description: "Low-maintenance indoor plant. Tolerates low light.",
        lightRequirement: "Low to medium indirect light",
        wateringFrequency: "Every 3-5 weeks (let soil dry completely)",
        humidityPercentage: "30-60%"
    },
    {
        id: 6,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Pothos_%28Epipremnum_aureum%29.jpg/800px-Pothos_%28Epipremnum_aureum%29.jpg",
        commonName: "Golden Pothos",
        scientificName: "Epipremnum aureum",
        description: "Vining or hanging plant. Very adaptable and purifies air.",
        lightRequirement: "Low to bright indirect light",
        wateringFrequency: "When top 1-2 inches of soil are dry",
        humidityPercentage: "40-70%"
    },
    {
        id: 7,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Ficus_lyrata_2.jpg/800px-Ficus_lyrata_2.jpg",
        commonName: "Fiddle Leaf Fig",
        scientificName: "Ficus lyrata",
        description: "Large, violin-shaped leaves. Very decorative.",
        lightRequirement: "Bright indirect light",
        wateringFrequency: "When top 2-3 inches of soil are dry",
        humidityPercentage: "60-80%"
    },
    {
        id: 8,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Tradescantia_zebrina_plant.jpg/800px-Tradescantia_zebrina_plant.jpg",
        commonName: "Wandering Jew",
        scientificName: "Tradescantia zebrina",
        description: "Trailing plant with striped purple and green leaves.",
        lightRequirement: "Bright indirect light",
        wateringFrequency: "When top inch of soil is dry",
        humidityPercentage: "50-70%"
    },
    {
        id: 9,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pilea_peperomioides_2.jpg/800px-Pilea_peperomioides_2.jpg",
        commonName: "Chinese Money Plant",
        scientificName: "Pilea peperomioides",
        description: "Known for its round coin-shaped leaves. Easy to propagate.",
        lightRequirement: "Bright indirect light",
        wateringFrequency: "When top inch of soil is dry",
        humidityPercentage: "50-70%"
    },
    {
        id: 10,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Asparagus_setaceus.jpg/800px-Asparagus_setaceus.jpg",
        commonName: "Asparagus Fern",
        scientificName: "Asparagus setaceus",
        description: "Feathery foliage, good for hanging baskets or arrangements.",
        lightRequirement: "Medium to bright indirect light",
        wateringFrequency: "Keep soil consistently moist, not soggy",
        humidityPercentage: "60-80%"
    },
    {
        id: 11,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Chlorophytum_comosum_1.jpg/800px-Chlorophytum_comosum_1.jpg",
        commonName: "Spider Plant",
        scientificName: "Chlorophytum comosum",
        description: "Easy to care for, produces baby plantlets and cleans the air.",
        lightRequirement: "Medium to bright indirect light",
        wateringFrequency: "When top inch of soil is dry",
        humidityPercentage: "40-60%"
    },
    {
        id: 12,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Calathea_orbifolia.jpg/800px-Calathea_orbifolia.jpg",
        commonName: "Calathea Orbifolia",
        scientificName: "Goeppertia orbifolia",
        description: "Large round leaves with striking patterns. Requires high humidity.",
        lightRequirement: "Medium indirect light",
        wateringFrequency: "Keep soil consistently moist",
        humidityPercentage: "70-90%"
    },
    {
        id: 13,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Philodendron_brasil_1.jpg/800px-Philodendron_brasil_1.jpg",
        commonName: "Philodendron Brasil",
        scientificName: "Philodendron hederaceum 'Brasil'",
        description: "Vining plant with variegated green and lime-yellow leaves.",
        lightRequirement: "Medium to bright indirect light",
        wateringFrequency: "When top 1-2 inches of soil are dry",
        humidityPercentage: "50-70%"
    },
    {
        id: 14,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Euphorbia_pulcherrima_Poinsettia.jpg/800px-Euphorbia_pulcherrima_Poinsettia.jpg",
        commonName: "Poinsettia",
        scientificName: "Euphorbia pulcherrima",
        description: "Popular for Christmas decoration. Colorful red bracts.",
        lightRequirement: "Bright indirect light",
        wateringFrequency: "Keep soil consistently moist",
        humidityPercentage: "60-80%"
    },
    {
        id: 15,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Aglaonema_Silver_Queen.jpg/800px-Aglaonema_Silver_Queen.jpg",
        commonName: "Chinese Evergreen",
        scientificName: "Aglaonema commutatum",
        description: "Decorative foliage, ideal for low-light spaces.",
        lightRequirement: "Low to medium indirect light",
        wateringFrequency: "When top 1-2 inches of soil are dry",
        humidityPercentage: "40-60%"
    },
    {
        id: 16,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Dracaena_marginata.jpg/800px-Dracaena_marginata.jpg",
        commonName: "Dragon Tree",
        scientificName: "Dracaena marginata",
        description: "Palm-like shape, slender and elegant leaves.",
        lightRequirement: "Bright indirect light",
        wateringFrequency: "Let top 2 inches of soil dry",
        humidityPercentage: "40-60%"
    },
    {
        id: 17,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Nephrolepis_exaltata.jpg/800px-Nephrolepis_exaltata.jpg",
        commonName: "Boston Fern",
        scientificName: "Nephrolepis exaltata",
        description: "Lush and full. Great for hanging. Loves moisture.",
        lightRequirement: "Indirect light",
        wateringFrequency: "Keep soil evenly moist",
        humidityPercentage: "60-80%"
    },
    {
        id: 18,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dieffenbachia_seguine.jpg/800px-Dieffenbachia_seguine.jpg",
        commonName: "Dumb Cane",
        scientificName: "Dieffenbachia seguine",
        description: "Tropical foliage with variegated leaves. Toxic if ingested.",
        lightRequirement: "Medium to bright indirect light",
        wateringFrequency: "When top 1-2 inches of soil are dry",
        humidityPercentage: "60-80%"
    },
    {
        id: 19,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Schefflera_arboricola1.jpg/800px-Schefflera_arboricola1.jpg",
        commonName: "Umbrella Plant",
        scientificName: "Schefflera arboricola",
        description: "Glossy green leaves arranged like an umbrella.",
        lightRequirement: "Bright indirect light",
        wateringFrequency: "Let top 2 inches of soil dry",
        humidityPercentage: "50-70%"
    },
    {
        id: 20,
        imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Peperomia_argyreia_01.jpg/800px-Peperomia_argyreia_01.jpg",
        commonName: "Watermelon Peperomia",
        scientificName: "Peperomia argyreia",
        description: "Round leaves with silver stripes resembling watermelon.",
        lightRequirement: "Bright indirect light",
        wateringFrequency: "When top inch of soil is dry",
        humidityPercentage: "50-70%"
    }
];


// Ruta principal
app.get('/', (req, res) => {
    res.send('<h1 class="bg-red-500 text-white text-xl p-4">🌿 Bienvenido a la API de Plantas</h1>');
});

// Ruta de plantas
app.get('/api/plants', (req, res) => {
    res.json(plants);
});

// Añadir plantas
app.post('/api/plants', (req, res) => {
    const newPlant = req.body;

    // Solo commonName y description son obligatorios
    if (
        !newPlant.commonName?.trim() ||
        !newPlant.description?.trim()
    ) {
        return res.status(400).json({ error: 'commonName y description son obligatorios.' });
    }

    // Validar si humidityPercentage está presente
    if (
        newPlant.humidityPercentage !== undefined &&
        (isNaN(newPlant.humidityPercentage) || newPlant.humidityPercentage < 0 || newPlant.humidityPercentage > 100)
    ) {
        return res.status(400).json({ error: 'humidityPercentage debe ser un número entre 0 y 100.' });
    }

    // Añadir ID automáticamente
    newPlant.id = plants.length ? plants[plants.length - 1].id + 1 : 1;

    plants.push(newPlant);

    res.status(201).json(newPlant);
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
