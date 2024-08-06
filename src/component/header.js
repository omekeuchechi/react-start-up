import './header.css'
function Header() {
    class Product {
        constructor(Product, about_1) {
            this.pro = Product;
            this.ans = about_1;
        }
    }
    const proName = new Product("About", "product");
    return(
        <div className="nav">
            <div className="logo">OMK</div>
            <ul className="ul">
                <li>Home</li>
                <li>About</li>
                <li>Pricing</li>
                <li>{proName.pro}</li>
                <li>{proName.ans}</li>
            </ul>
        </div>
    );
}

// class Nice extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//             home: "niceHome",
//             about: "niceAbout"
//         };
//     }

//     changeNav = () =>{
//         this.setState({home: "blue"});
//     }

//     render(){
//         return(
//             <div>
//                 <p>is{this.state.home} and {this.state.about} ok</p>
//                 <button 
//                 type='button'
//                 onClick={this.changeNav}>changeDiv</button>
//             </div>
//         );
//     }
// }

export default Header;