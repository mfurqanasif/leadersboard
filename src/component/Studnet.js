import React ,{Component} from 'react';
import './student.css';

class Student extends Component{
constructor(){
    super();
    this.state = {
        score : 0,
        success : false
    }
}
componentDidMount(){

    this.setState({
        score : this.props.score
    });
}

inc(){
    this.setState(
        {score : this.state.score +1},
        () => { if(this.state.score >= 350){
            this.setState({success:true})
            }
        }
        )
}

dec(){

    this.setState({
        score : this.state.score - 1
  } ,
  () => { if(this.state.score < 340){
      this.setState({success:false})
      }
  }
  )
}
render(){
    let text;
    if (this.state.success || this.state.score>=350){
        text = <span className="success">Success</span>
    }
    else if(this.state.score >= 340){
        text = "";
    }
    else{
        text = <span className="fail">Failed</span>
    }

    return(

                    
            <div className="student">
                <div className="left">
                    <div className="student-info">
                        <h2>{this.props.name}<button className="add" onClick = {()=>this.inc()}>+</button><button  className="sub" onClick = {()=>this.dec()}>-</button></h2>
                        <p>{this.props.uname}{text}</p>
                    </div>
                </div>
                <div className="right">
                         <h3>{this.state.score}</h3>
                </div>
            </div>
    );
}



};

export default Student;