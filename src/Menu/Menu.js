import React    from "react";
import template from "./Menu.jsx";

class Menu extends React.Component {

   constructor(){
                super();
                let timerId ;
                let _flag = true
                window.addEventListener('resize', ()=>{
                    if(_flag){
                        this.fnResize();
                        _flag = false
                    }
                    clearTimeout(timerId);
                    timerId = window.setTimeout(()=>{
                        this.fnResize()
                    },1000)
                    // this.fnResize()
                    
                });
               
                
            }

            fnResize=()=>{
                    const width = document.body.offsetWidth;
                    let isMobileView = false
                    width>600? isMobileView = false:isMobileView=true;
                    
                    this.setState({
                        width,
                        isMobileView
                    })
                    console.log('7 lines')
            }

            state={
                menuItem:'H',
                width:document.body.offsetWidth,
                isMobileView: document.body.offsetWidth>600?false:true,
                left:-190
            }
            fnClick(menuItem){
                this.setState({ 
                    menuItem:menuItem
                })
                this.fnMobileMenuBtnClick()
            }
            fnMobileMenuBtnClick=()=>{
                this.setState({
                    left: this.state.left==0?-190:0
                    
                })
            }

  render() {
    return template.call(this);
  }
}

export default Menu;
