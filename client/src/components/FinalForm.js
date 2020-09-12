import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {BASE_URL} from '../constants'
import _ from 'lodash'


const FinalForm = (props) => {
    const id = props.match.params.id
    const [user,setUser] = useState({})
    console.log(props)

    useEffect(()=>{
        axios.post(BASE_URL+'/api/getuser',{_id:id})
        .then(res=>{
            console.log(res)
            setUser(res.data)
            let name = res.data.name + " " + res.data.lastname
            console.log(name)
            axios.post(BASE_URL+'/api/getanswersforuser',{name:name})
            .then(resp=>{
                // console.log(resp)
                let arr = _.sortBy(resp.data,['subject','question'])
                console.log(arr)
            })
        })
    },[])
    // get the user 
    // get the answers about the user
    return (
        <div>
            final {id}
        </div>
    )
}


export default FinalForm