import './App.css';
import React, { PureComponent } from 'react'
import logo from './assets/logo.png';
import Blue from './assets/blue.png';
import Black from './assets/black.png';
import Green from './assets/green.png';
import Orange from './assets/orange.png';
import Red from './assets/red.png';

 class App extends React.PureComponent {
    state = {
        sizeLinks: [
            {
              id: 1,
              name: "7",            
              className: "size_body",
              value: "7"
            },
            {
              id: 2,
              name: "8",           
              className: "size_body",
              value: "8"
            },
            {
              id: 3,
              name: "9",            
              className: "size_body",
              value: "9"
            },
            {
              id: 4,
              name: "10",            
              className: "size_body",
              value: "10"
            }
          ],
          activeSize: null,
          colorLinks: [
            {
                id: 1,           
                className: "color_body",
                primary: "#2175f5",
                color: "blue",
                value: "blue"
              },
            {
              id: 2,           
              className: "color_body",
              primary: "#f84848",
              color: "red",
              value: "red"
            },
            {
              id: 3,  
              className: "color_body",
              primary: "#29b864",
              color: "green",
              value: "green"
            },
            {
              id: 4,          
              className: "color_body",
              primary: "#444",
              color: "black",
              value: "black"
            },
            {
              id: 5,           
              className: "color_body",
              primary: "#ff5521",
              color: "orange",
              value: "orange"
            }
          ],
          activeColor: null,
          imgLinks: [
            {
                id: 1,           
                className: "shoe show",
                src: Blue,
                color: "blue",
                value: "blue"
              },
            {
              id: 2,           
              className: "shoe",
              src: Red,
              color: "red",
              value: "red"
            },
            {
              id: 3,  
              className: "shoe",
              src: Green,
              color: "green",
              value: "green"
            },
            {
              id: 4,          
              className: "shoe",
              src: Black,
              color: "black",
              value: "black"
            },
            {
              id: 5,           
              className: "shoe",
              src: Orange,
              color: "orange",
              value: "orange"
            }
          ],
          activeImage: null        
      }

    handleClickSize = id => {
        this.setState({ activeSize: id });
    };

    handleClickColor = (id, primary) => {
        this.setState({ activeColor: id });
        this.setState({ activeImage: id });
        document.documentElement.style.setProperty('--primary', primary );
    };

      render() {

        const { sizeLinks, activeSize } = this.state;
        const { colorLinks, activeColor } = this.state;
        const { imgLinks, activeImage } = this.state;

            return (  
                <div className="container">
                    <div className="card">
                        <div className="shoeBackground">
                            <div className="gradients">
                                {colorLinks.slice(0).reverse().map(colorLink => {
                                        return (
                                            <div key={colorLink.id}>
                                                <span                
                                                    color={colorLink.color}
                                                    className={
                                                    "gradient" +
                                                    (colorLink.id === activeColor ? " second" : "")
                                                    }                                               
                                                >
                                                {colorLink.name}
                                                </span>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <h1 className="nike">nike</h1>
                            <img src={logo} alt="Logo" className="logo" />
                            <a href="#" className="share"><i className="fa fa-share-alt"></i></a>
                            {imgLinks.map(imgLink => {
                                        return (
                                            <span key={imgLink.id}>
                                                <img                               
                                                    src={imgLink.src}
                                                    className={
                                                    imgLink.className+
                                                    (imgLink.id === activeImage ? " show" : "")
                                                    }
                                                    color={imgLink.color}                                               
                                                />                          
                                            </span>
                                        );
                                    })
                                }
                        </div>
                        
                        <div className="info">
                            <div className="shoeName">
                                <div>
                                    <h1 className="big">Nike Zoom KD 12</h1>
                                    <span className="new">new</span>
                                </div>
                                <h3 className="small">Men's running shoes</h3>
                            </div>
                            <div className="description">
                                <h3 className="title">Product Info</h3>
                                <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                            </div>
                            <div className="color-container">
                                <h3 className="title">Color</h3>
                                <div className="colors">
                                    {colorLinks.map(colorLink => {
                                        return (
                                            <div key={colorLink.id} className="color_main">
                                                <span                
                                                    onClick={() => this.handleClickColor(colorLink.id,colorLink.primary)}
                                                    primary={colorLink.primary}
                                                    color={colorLink.color}
                                                    className={
                                                    colorLink.className +
                                                    (colorLink.id === activeColor ? " active" : "")
                                                    }                                               
                                                >
                                                {colorLink.name}
                                                </span>
                                            </div>
                                        );
                                    })
                                    }
                                </div>
                            </div>
                            <div className="size-container">
                                <h3 className="title">size</h3>
                                <div className="sizes">
                                    {sizeLinks.map(sizeLink => {
                                        return (
                                            <div key={sizeLink.id} className="sizes_main">
                                                <span                
                                                    onClick={() => this.handleClickSize(sizeLink.id)}
                                                    className={
                                                    sizeLink.className +
                                                    (sizeLink.id === activeSize ? " active" : "")
                                                    }                                               
                                                >
                                                {sizeLink.name}
                                                </span>
                                            </div>
                                        );
                                    })
                                    }
                                </div>
                            </div>
                            <div className="buy-price">
                                <a href="#" className="buy"><i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to card</a>
                                <div className="price">
                                    <h1><i class="fa fa-gbp fa-2x"></i></h1>
                                    <h1>189.99</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
      }

export default App;

