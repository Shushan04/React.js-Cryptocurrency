import React from 'react';
import Table from '../../components/table';
import Loading from '../../components/loading';

class CryptoCurrencyList extends React.Component {
    constructor() {  //1
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
            const result = await response.json(); //"[{x: 10}]" ---> [{x: 10}]

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
        this.handleGetCurrenciesList(); //backend data
    }

    render() {  
        const { loading, error, data } = this.state;
        
        if (loading) {
            return (
                <div className='loading-container'>
                    <Loading width="80px" height="80px" />
                </div>
            )
        }
      
        return (
            <div>
                <Table currencyList={data} />
            </div>
        )
    }
}

export default CryptoCurrencyList;