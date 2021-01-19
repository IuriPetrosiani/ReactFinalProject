import React from 'react'


export class  Ajax1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            info:[],
            info2:[]
            
        }
    }

    async componentDidMount(){
        this.info1();
        this.info2();
    }
    async info1(){
        const url="https://jsonplaceholder.typicode.com/users"
        const res=await fetch(url)
        const data= await res.json()
        this.setState({info:data})
    }
    async info2(){
        const url="https://jsonplaceholder.typicode.com/posts"
        const res=await fetch(url)
        const data= await res.json()
        this.setState({info2:data})
    }

    

    

    render(){
        const TableStyle={
            fontSize:20,
            background:'#1285E6',
            marginTop:'10%',
            marginBottom:'10%',
        }
        console.log(this.state.info2)
        
        
        return(
            
            <div>
               <table style={TableStyle}> 
                <tr>
                <th>id</th>
                <th>name</th>
                <th>username</th>
                </tr>
        {this.state.info.map((data) =>
                <tr > 
                <td> {data.id} </td> 
                <td> {data.name} </td>
                <td> {data.username} </td>
                                </tr>
                               ) }
                        </table>



                <table style={TableStyle}> 
                <tr>
                <th>UserId</th>
                <th>Id</th>
                <th>Title</th>
                </tr>
        {this.state.info2.map((data) =>
                <tr > 
                <td> {data.userId} </td> 
                <td> {data.id} </td>
                <td> {data.title} </td>
                                </tr>
                               ) }
                        </table>
            </div>
            
            
        )
        
    }
}

export default Ajax1