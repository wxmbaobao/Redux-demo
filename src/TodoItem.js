import React,{Component} from 'react';
class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleItemClick=this.handleItemClick.bind(this)
    }
      
   //return false，此处是性能优化，
   //防止父组件render生命周期执行时，TodoItem子组件每次都随即执行render函数
   shouldComponentUpdate(nextProps,nextState){
       if(nextProps.content !== this.props.content){
           return true;
       }else{
        return false;
       }
   }

    render(){
        console.log('child render');
        const {content}=this.props;
        return(
            <div onClick={this.handleItemClick}>
              {content}
            </div>
        )
    }
     
    //一个组件要从父组件接受参数
    //如果这个组件第一次存在于父组件中，不会执行
    //只有当这个组件第二次及之后，才会执行
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
     

    //当item被移除时候，执行
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }


    handleItemClick(){
        const {deleteItem,index}=this.props;
       deleteItem(index);
    }
}

export default TodoItem