import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../components/Card'
import { getCatalogItems, getCats } from '../data';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loaded: false,
            filter: "",
            items: [],
            selectedCats: null
        };
    }

    async componentDidMount(){
        const items = await getCatalogItems();
        const cats = await getCats();
        this.setState({
            loaded: true,
            items: items,
            cats: cats
        });
    }

    onChange(e) {
        const val = e.target.value;    
        this.setState({
            filter: val.toLowerCase()
        });
    }

    render() {
        const cat = this.props.match?.params?.cat || null;
        console.log(cat);
        if (!this.state.loaded){
            return ( <h1>Загрузка</h1>)
        }else{
            return (<div className="content">
                <div>
                    <h1>Ювелирные изделия</h1>
                    <div className="search-block">
                        <img width={30} height={30} src="/img/search.svg" alt="Search" />
                        <input placeholder="Поиск..." onChange={(e) => this.onChange(e)}></input>
                    </div>  
                </div>
                <div>
                <Link to={'/'}>Все</Link>
                {this.state.cats.map((i, index)=>{
                    return <Link to={'/' + i.id}>{i.name}</Link>
                })}
                </div>
                <div className="conteinerCard">
                    {this.state.items.map((i, index)=>{
                        // filter
                        if (this.state.filter.length>0 && i.title.toLowerCase().indexOf(this.state.filter) === -1){
                            return null;
                        }
                        // cats
                        if (cat && i.cat != cat){
                            return null;
                        }
                        return (
                            <Card
                            key={index.toString()}
                            title={i.title}
                            prise={i.price}
                            imageUrl={i.imageUrl}
                        />)
                    })}
                    
                </div>
            </div>);
        }
    }
  }

export default Home;