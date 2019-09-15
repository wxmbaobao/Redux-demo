import React,{Component,Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';

//生命周期函数指在某一个时刻组件会自动执行的函数
class TodoList extends Component{
    
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:[]
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleButtonClick=this.handleButtonClick.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }
    
    //在组件即将被挂载到页面的时刻自动执行
    componentWillMount(){
       // console.log('componentWillMount');
       axios.get('/api/todolist')
         .then(()=>{alert('succ')})
         .catch(()=>{alert('error')})
    }

    //当组件的state或者props发生改变的时候，render函数就会重新执行。
    render (){
        console.log('parent render');
        return(
            <Fragment>
                <div>
                    {/* 写label标签中的htmlFor的textArea与input中的id与之对应，点击  请输入内容时，光标会移动到输入框内 */}
                    <label htmlFor='textArea'>请输入内容</label>
                    <input  id='textArea'
                            className='input'
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                            // ref直接获取input Dom元素，进行操作
                            ref={(input)=>{this.input=input}}
                     ></input>
                    <button 
                            onClick={this.handleButtonClick}
                    >提交按钮</button>
                </div>
                <ul>
                 { this.getTodoItem() }
                </ul>


            </Fragment>
      
        )
        
    }

    //组件在挂载到页面之后，自动被执行
    componentDidMount(){
        console.log('componentDidMount');
        
    }

    //组件被更新之前，他会自动执行
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }

    //组件被更新之前，他会自动执行，但是在shouldComponentUpdate之后
    //如果shouldComponentUpdate返回为true，他才执行
    //如果返回false,这个函数就不会执行了
     componentWillUpdate(){
         console.log('componentWillUpdate');
     }
     

     //组件完成更新之后，他会被执行
     componentDidUpdate(){
        console.log('componentDidUpdate');
    }


    //此为顶级组件，详情见TodoItem
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }

    getTodoItem(){
        return(
            //  dangerouslySetInnerHTML是在输入框输入h1等标签时候不转义
            this.state.list.map((item,index)=>{
                return(
                    <TodoItem 
                       content={item}
                       index={index}
                       deleteItem={this.handleDelete}
                    />
                )
           })
        )
    }

    handleInputChange(e){
        // setState是异步的,第二个参数是回调函数callback
                        //  console.log(e.target);
        // const value=e.target.value
        const value=this.input.value
        this.setState(()=>{
            return{
                inputValue:value
            }
        },()=>{
        //    可以打印当前状态
        })


    }

    handleButtonClick(){
        this.setState((preState)=>{
            return{
                list:[...preState.list,preState.inputValue],
                inputValue:''
            }
        })
    }

    handleDelete(index){
        this.setState(()=>{
           const list=[...this.state.list];
            list.splice(index,1);
             return{list}
        })
    }

}
export default TodoList;