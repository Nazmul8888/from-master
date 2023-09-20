

const SimpleFrom = () => {

    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);

    }
    return (
        <div onSubmit={handleSubmit}>
            <form >
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="phone" name="phone" id="" />
                <br />
                <button>submit</button>
            </form>
            
        </div>
    );
};

export default SimpleFrom;