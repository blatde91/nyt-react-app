import React from 'react';
import { Container } from "../../components/Grid";
import Search from '../../components/search/Search';

class Home extends React.Component {


    render() {
        return (
            <div>
                <Container>
                    <Search />
                    
                </Container>
            </div>
        );
    }
}

export default Home;