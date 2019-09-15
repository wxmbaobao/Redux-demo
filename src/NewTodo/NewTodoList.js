import React,{Component} from 'react';
import 'antd/dist/antd.css'; 
import { Input,Button,List,Typography  } from 'antd';


const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
  

class NewTodoList extends Component{
      
  render(){
      return (
          <div style={{marginTop:'10px',marginLeft:'10px'}}>
              <div>
              <Input placeholder="请输入内容" style={{marginRight:'10px',width:'300px'}} />
              <Button type="primary">提交</Button>
              </div>

              <List
                    style={{marginTop:'10px',width:'300px'}}
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={data}
                     renderItem={item => (
                      <List.Item>
                            <Typography.Text mark>[ITEM]</Typography.Text> {item}
                      </List.Item>
                     )}
               />
          </div>
      )
  }

}

export default NewTodoList;