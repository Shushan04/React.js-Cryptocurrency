import React from 'react';
import Table from '../../components/table';

class CryptoCurrencyList extends React.Component {
    constructor() { //1
        super();
        this.state = { //
            loading: false,
            data: [],
            error: null,
            page: 1,
        }
    }


    async handleGetCurrenciesList() {
        this.setState({
            loading: true
        })

        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/?per_page=10`);
            const result = await response.json();

            this.setState({
                data: result
            })

        } catch(error) {
            this.setState({
                error: 'Errror Ooooooops'
            })
        } finally {
            this.setState({
                loading: false,
            })
        }
    }

    componentDidMount() {
        this.handleGetCurrenciesList();
    }

    render() { 
        const { loading, error, data } = this.state;
        
        console.log(this.state);

        return (
            <div>
                <Table />
            </div>
        )
    }
}

export default CryptoCurrencyList;