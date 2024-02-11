

const CoffeeOne = ({coffee}) => {
    const {id,img,title,paragraph}=coffee
    return (
        <div>
           <div className="">
           <img className="mt-7 w-10 h-12" src={img}></img>
           <h1 className="text-xl font-bold">{title}</h1>
           <h1 className="mb-5">{paragraph}</h1>
           </div>
        </div>
    );
};

export default CoffeeOne;