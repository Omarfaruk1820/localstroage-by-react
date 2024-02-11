

const SingleCoffee = ({coffee}) => {
    const {img}=coffee;
    return (
        <div className="card shadow-orange-50">
           <img src={img}></img>
        </div>
    );
};

export default SingleCoffee;