
var cupcakes = [
    {name: "Blue Rose Cupcakes",
fileName: "Blue_Rose_Cupcakes.jpg",
price: "21.00"},
{name: "Celebratory Cupcakes",
fileName: "Celebratory_Cupcakes.jpg",
price: "21.00"},
{name: "Cupcakes with Sprinkles", 
fileName: "Cupcakes_with_pastel_sprinkles.jpg",
price: "23.00"},
{name: "Flower Cupcakes",
fileName: "Flower_Cupcakes.jpg",
price:"27.00"},
{name: "Ice Cream Cupcakes",
fileName: "Ice_Cream_Cupcake.jpg",
price: "31.00"},
{name: "Raspberry Cupcakes",
fileName:"Raspberry_Cupcake.jpg",
price: "34.00"},
{name: "Strawberry Cupcakes",
fileName: "Strawberry_Cupcakes.jpg",
price: "27.00"},
{name: "Vanilla Buttercream",
fileName: "vanilla_buttercream.jpg",
price: "37.00"}
],
wedding_cakes= [
    {name: "Champagne Cake",
fileName: "Champagne_Wedding_Cake.jpg",
price: "34.00"},
{name: "Fall Cake",
fileName: "Fall _Wedding_cake.jpg",
price: "29.00"},
{name: "Flower Cake",
fileName: "Flower_Wedding_Cake.jpg",
price: "24.00"},
{name: "Four-tiered Cake",
fileName: "four-tiered wedding cake.jpg",
price:"34.00"},
{name: "Modern Cake",
fileName: "Modern_wedding_cake.jpg",
price: "34.00"},
{name: "Rose Cake",
fileName: "Rose_Cakes.jpg",
price: "34.00"},
{name: "Cake with Strawberries",
fileName: "Wedding_cake_with_strawberries.jpg",
price: "33.00"},
{name: "Wood Cake",
fileName: "Wood_Cakes.jpg",
price:"32.00"}
];

const generalPath="./src/assets/img/",
weddingCakesPath="./src/assets/img/Wedding_Cakes/";

export default function Products() {
    return (<main className="products">
        <section className="cupcakes">
            <h2>Cupcakes</h2>
            <figure>
                <img src={generalPath+cupcakes[0].fileName} alt={cupcakes[0].name} />
                <figcaption className="products_captions">
                    <h4>{cupcakes[0].name}</h4>
                    <span>{cupcakes[0].price}</span>
                </figcaption>
            </figure>
            <figure>
                <img src={generalPath+cupcakes[1].fileName} alt={cupcakes[1].name} />
                <figcaption className="products_captions">
                    <h4>{cupcakes[1].name}</h4>
                    <span>{cupcakes[1].price}</span>
                </figcaption>
            </figure>
            <figure>
                <img src={generalPath+cupcakes[2].fileName} alt={cupcakes[2].name} />
                <figcaption className="products_captions">
                    <h4>{cupcakes[2].name}</h4>
                    <span>{cupcakes[2].price}</span>
                </figcaption>
            </figure>
            <figure>
                <img src={generalPath+cupcakes[3].fileName} alt={cupcakes[3].name} />
                <figcaption className="products_captions">
                    <h4>{cupcakes[3].name}</h4>
                    <span>{cupcakes[3].price}</span>
                </figcaption>
            </figure>
            <figure>
                <img src={generalPath+cupcakes[4].fileName} alt={cupcakes[4].name} />
                <figcaption className="products_captions">
                    <h4>{cupcakes[4].name}</h4>
                    <span>{cupcakes[4].price}</span>
                </figcaption>
            </figure>
            <figure>
                <img src={generalPath+cupcakes[5].fileName} alt={cupcakes[5].name} />
                <figcaption className="products_captions">
                    <h4>{cupcakes[5].name}</h4>
                    <span>{cupcakes[5].price}</span>
                </figcaption>
            </figure>
            <figure>
                <img src={generalPath+cupcakes[6].fileName} alt={cupcakes[6].name} />
                <figcaption className="products_captions">
                    <h4>{cupcakes[6].name}</h4>
                    <span>{cupcakes[6].price}</span>
                </figcaption>
            </figure>
            <figure>
                <img src={generalPath+cupcakes[7].fileName} alt={cupcakes[7].name} />
                <figcaption className="products_captions">
                    <h4>{cupcakes[7].name}</h4>
                    <span>{cupcakes[7].price}</span>
                </figcaption>
            </figure>
        </section>
        <section className="wedding_cakes">
            <h2>Wedding Cakes</h2>
            <figure>
                <img src={weddingCakesPath+wedding_cakes[0].fileName} alt={wedding_cakes.name} />
                <figcaption className="products_captions">
                    <h4>{wedding_cakes[0].name}</h4>
                    <span>{wedding_cakes[0].price}</span>
                </figcaption>
            </figure>
            <figure>
                <img src={weddingCakesPath+wedding_cakes[1].fileName} alt={wedding_cakes.name} />
                <figcaption className="products_captions">
                    <h4>{wedding_cakes[1].name}</h4>
                    <span>{wedding_cakes[1].price}</span>
                </figcaption>
            </figure>
            <figure>
                <img src={weddingCakesPath+wedding_cakes[2].fileName} alt={wedding_cakes.name} />
                <figcaption className="products_captions">
                    <h4>{wedding_cakes[2].name}</h4>
                    <span>{wedding_cakes[2].price}</span>
                </figcaption>
            </figure>
            <figure>
                <img src={weddingCakesPath+wedding_cakes[3].fileName} alt={wedding_cakes.name} />
                <figcaption className="products_captions">
                    <h4>{wedding_cakes[3].name}</h4>
                    <span>{wedding_cakes[3].price}</span>
                </figcaption>
            </figure>
            <figure>
                <img src={weddingCakesPath+wedding_cakes[4].fileName} alt={wedding_cakes.name} />
                <figcaption className="products_captions">
                    <h4>{wedding_cakes[4].name}</h4>
                    <span>{wedding_cakes[4].price}</span>
                </figcaption>
            </figure>
            <figure>
                <img src={weddingCakesPath+wedding_cakes[5].fileName} alt={wedding_cakes.name} />
                <figcaption className="products_captions">
                    <h4>{wedding_cakes[5].name}</h4>
                    <span>{wedding_cakes[5].price}</span>
                </figcaption>
            </figure>
            <figure>
                <img src={weddingCakesPath+wedding_cakes[6].fileName} alt={wedding_cakes.name} />
                <figcaption className="products_captions">
                    <h4>{wedding_cakes[6].name}</h4>
                    <span>{wedding_cakes[6].price}</span>
                </figcaption>
            </figure>
            <figure>
                <img src={weddingCakesPath+wedding_cakes[7].fileName} alt={wedding_cakes.name} />
                <figcaption className="products_captions">
                    <h4>{wedding_cakes[7].name}</h4>
                    <span>{wedding_cakes[7].price}</span>
                </figcaption>
            </figure>
        </section>
    </main>)
}