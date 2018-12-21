import React, { Component } from 'react';
import './App.css';
import Card from './components/card';
import Add from './components/add';
import Controls from './components/Controls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      addIsHidden: true,
      inputContent: '',
      posterInputContent: '',
      info: '',
      customEp: '',
      beforeEditEpNum: ''
    };
  }
  
componentWillMount() {
  localStorage.getItem('list') && this.setState({
    list: JSON.parse(localStorage.getItem('list'))
  })
}

  componentWillUpdate(nextProps, nextState) { localStorage.setItem('list', JSON.stringify(nextState.list))}
  addOnClick = () => {this.setState({addIsHidden: false})}

  createNewCardOnClick = () => {
    if (this.state.inputContent !== '' && this.state.info.Title) {
      this.setState({
        list: [...this.state.list, {
          title: this.state.info.Title,
          poster: this.state.info.Poster,
          nextEpisode: 1,
          currentSeason: 1,
          backColor: this.state.backColorContent
        }]
      })

      this.setState({
        inputContent: '',
        posterInputContent: '',
        epNumberContent: '',
        seasonsContent: '',
        backColorContent: ''
      })

      this.setState({addIsHidden: true})
    } else {alert('Nothing is selected.');}
  }

  closeAddPage = () => {this.setState({addIsHidden: true})}

  createInputOnChange = (event) => {
    this.connectToServer(event.target.value, event);
    this.setState({
      inputContent: event.target.value
    })
  }
  
  posterInputOnChange = (event) => {
    this.setState({posterInputContent: event.target.value})
  }

  incrementEpOnClick = (event) => {
    if (event.target.tagName === 'BUTTON') {
      this.state.list.forEach((element) => {
        if (event.target.parentNode.parentNode.children[0].textContent === element.title) {
          this.setState(Object.assign(this.state.list[this.state.list.indexOf(element)], {nextEpisode:parseInt(event.target.parentNode.parentNode.children[2].textContent, 10) + 1}))
        }
      })    
    } else if (event.target.tagName === 'I') {
      this.state.list.forEach((element) => {
        if (event.target.parentNode.parentNode.parentNode.children[0].textContent === element.title) {
          this.setState(Object.assign(this.state.list[this.state.list.indexOf(element)], {nextEpisode:parseInt(event.target.parentNode.parentNode.parentNode.children[2].textContent, 10) + 1}))
        }
      })
    }
  }

  decrementEpOnClick = (event) => {
    if (event.target.tagName === 'BUTTON') {
      this.state.list.forEach((element) => {
        if (event.target.parentNode.parentNode.children[0].textContent === element.title) {
          this.setState(Object.assign(this.state.list[this.state.list.indexOf(element)], {nextEpisode:parseInt(event.target.parentNode.parentNode.children[2].textContent, 10) - 1}))
        }
      })
    } else if (event.target.tagName === 'I') {
      this.state.list.forEach((element) => {
        if (event.target.parentNode.parentNode.parentNode.children[0].textContent === element.title) {
          this.setState(Object.assign(this.state.list[this.state.list.indexOf(element)], {nextEpisode:parseInt(event.target.parentNode.parentNode.parentNode.children[2].textContent, 10) - 1}))
        }
      })
    }
  }

  incrementSOnClick = (event) => {
    if (event.target.tagName === 'BUTTON') {
      this.state.list.forEach((element) => {
        if (event.target.parentNode.parentNode.children[0].textContent === element.title) {
          this.setState(Object.assign(this.state.list[this.state.list.indexOf(element)], {currentSeason:parseInt(event.target.parentNode.parentNode.children[1].children[0].textContent, 10) + 1}))
        }
      })
    } else if (event.target.tagName === 'I') {
      this.state.list.forEach((element) => {
        if (event.target.parentNode.parentNode.parentNode.children[0].textContent === element.title) {
          this.setState(Object.assign(this.state.list[this.state.list.indexOf(element)], {currentSeason:parseInt(event.target.parentNode.parentNode.parentNode.children[1].children[0].textContent, 10) + 1}))
        }
      })
    }
  }

  decrementSOnClick = (event) => {
    if (event.target.tagName === 'BUTTON') {
      this.state.list.forEach((element) => {
        if (event.target.parentNode.parentNode.children[0].textContent === element.title) {
          this.setState(Object.assign(this.state.list[this.state.list.indexOf(element)], {currentSeason:parseInt(event.target.parentNode.parentNode.children[1].children[0].textContent, 10) - 1}))
        }
      })  
    } else if (event.target.tagName === 'I') {
      this.state.list.forEach((element) => {
        if (event.target.parentNode.parentNode.parentNode.children[0].textContent === element.title) {
          this.setState(Object.assign(this.state.list[this.state.list.indexOf(element)], {currentSeason:parseInt(event.target.parentNode.parentNode.parentNode.children[1].children[0].textContent, 10) - 1}))
        }
      })
    }

  }

  currentSeasonInputOnChange = (event) => {this.setState({currentSeasonContent: event.target.value})}

  setColor = (event) => {
    let colorDivArray = document.querySelectorAll('.color-div');
    colorDivArray.forEach((element) => {
      element.classList.remove('selected');
    })
    event.target.classList.add('selected');
    this.setState({
      backColorContent: event.target.style.backgroundColor
    })
  }

  cardDeleteOnClick = (event) => {
    let arrayWithoutDeletedItem = this.state.list;
    let indexToDelete;
    arrayWithoutDeletedItem.forEach((element) => {
      if (element.title === event.target.parentNode.children[0].textContent) {
        indexToDelete = arrayWithoutDeletedItem.indexOf(element);
      }
    })
    arrayWithoutDeletedItem.splice(indexToDelete , 1);
    this.setState({
      list: arrayWithoutDeletedItem
    })

  }

  editToggle = (event) => {    
    let removeButtons = document.querySelectorAll('.card-delete-button');
    removeButtons.forEach((removebtn) => {removebtn.classList.toggle('edit-activated-or-not');})

    if (event.target.tagName === 'I') {
      if (event.target.className === 'fas fa-trash-alt') {
        event.target.className = 'fas fa-check';
        event.target.parentNode.title = 'Done removing';
      } else {
        event.target.className = 'fas fa-trash-alt';
        event.target.parentNode.title = 'Remove a card';
      }
    } else {
      if (event.target.children[0].className === 'fas fa-trash-alt') {
        event.target.children[0].className = 'fas fa-check';
        event.target.title = 'Done removing';
      } else {
        event.target.children[0].className = 'fas fa-trash-alt';
        event.target.title = 'Remove a card';
      }
      
    }}

  controlsBarMaximize = (event) => {event.target.parentNode.children[1].classList.toggle('maximized');}

  connectToServer = (titleData, ev = false) => {  
    ev.persist();
    fetch(`https://www.omdbapi.com/?apikey=27672a84&t=${titleData}`)
    .then(response => response.json())
    .then((data) => {
        if (data.Response === 'False') {   
          ev.target.style.color = '#fff';
          ev.target.style.backgroundColor = '#d34545';
        } else {
          ev.target.style.color = '#fff';
          ev.target.style.backgroundColor = '#7dac6b';
        }
        this.setState({info: data})
    })

  }

  customEpInputOnChange = (event) => {this.setState({customEp: event.target.value})}

  confirmEpEdit = (event) => {
          if (event.keyCode === 13) {
            let customep = this.state.customEp;
            this.state.list.forEach((element) => {
              if (event.target.parentNode.parentNode.children[0].textContent === element.title) {
                this.setState(Object.assign(this.state.list[this.state.list.indexOf(element)], {nextEpisode: parseInt(customep, 10)}))
              }
            })
            event.target.style.display = 'none';
            event.target.parentNode.children[0].style.opacity = '1';
          }else if (event.keyCode === 27) {
            this.state.list.forEach((element) => {
              if (event.target.parentNode.parentNode.children[0].textContent === element.title) {
                this.setState(Object.assign(this.state.list[this.state.list.indexOf(element)], {nextEpisode: parseInt(this.state.beforeEditEpNum, 10)}))
              }
            })
            event.target.style.display = 'none';
            event.target.parentNode.children[0].style.opacity = '1';
          }
  }
  customepnmbr = (event) => {
    event.target.parentNode.children[1].style.display = 'inline-block';
    event.target.parentNode.children[1].value = event.target.textContent;
    this.setState({
      customEp: event.target.textContent,
      beforeEditEpNum: event.target.textContent
    })
    event.target.parentNode.children[1].focus();
    event.target.style.opacity = '0'; 
  }

  download = (content, fileName, contentType) => {
    let a = document.createElement("a");
    let file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

  backup = () => {
    let jsonBackup = JSON.stringify(this.state.list);
    let str = `${new Date().toLocaleString().replace(/[^0-9]/g, "")}.json`
    this.download(jsonBackup, str, 'text/plain');
  }

  fileInputOnChange = (event) => {
    let f = event.target.files[0]; 
    if (f) {
      const r = new FileReader();
      let contents;
      r.onload = (e) => { 
        contents = JSON.parse(e.target.result);
        this.setState({
          list: contents
        })       
      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }
  }

  restore = () => {
    let fi = document.querySelector('#importFile');
    fi.click();    
  }

  render() {
    return this.state.addIsHidden ?  
      (
      <div className="app-main-container" >
        <Controls 
        controlsBarMaximize={this.controlsBarMaximize}
        addOnClick={this.addOnClick}
        editToggle={this.editToggle}
        backup={this.backup}
        restore={this.restore}
        fileInputOnChange={this.fileInputOnChange}
        />
        {
          this.state.list.map((element, index) => {
            return (<Card
              customEpInputOnChange={this.customEpInputOnChange}
              confirmEpEdit={this.confirmEpEdit}
              customepnmbr={this.customepnmbr} 
              key={index}
              title={element.title} 
              poster={element.poster}
              nextEpisodeNumber={element.nextEpisode}
              incrementEpOnClick={this.incrementEpOnClick}
              decrementEpOnClick={this.decrementEpOnClick}
              incrementSOnClick={this.incrementSOnClick}
              decrementSOnClick={this.decrementSOnClick}
              currentSeason={element.currentSeason}
              backColor={element.backColor}
              cardDeleteOnClick={this.cardDeleteOnClick}
              showEditor={this.showEditor}
              />)
          })
        }
      </div>
      ) : (
        <div className="app-main-container" >
        <Controls 
        controlsBarMaximize={this.controlsBarMaximize}
        addOnClick={this.addOnClick}
        editToggle={this.editToggle}
        backup={this.backup}
        restore={this.restore}
        fileInputOnChange={this.fileInputOnChange}
        />
        {
          this.state.list.map((element, index) => {
            return (<Card
              customEpInputOnChange={this.customEpInputOnChange}
              confirmEpEdit={this.confirmEpEdit}
              customepnmbr={this.customepnmbr} 
              key={index}
              title={element.title} 
              poster={element.poster}
              nextEpisodeNumber={element.nextEpisode}
              incrementEpOnClick={this.incrementEpOnClick}
              decrementEpOnClick={this.decrementEpOnClick}
              incrementSOnClick={this.incrementSOnClick}
              decrementSOnClick={this.decrementSOnClick}
              currentSeason={element.currentSeason}
              backColor={element.backColor}
              cardDeleteOnClick={this.cardDeleteOnClick}
              showEditor={this.showEditor}
              />)
          })
        }

        <Add 
        epnumberInputOnChange={this.epnumberInputOnChange}
        fileSelectOnChange={this.fileSelectOnChange} 
        createInputOnChange={this.createInputOnChange} 
        posterInputOnChange={this.posterInputOnChange} 
        createNewCardOnClick={this.createNewCardOnClick}
        numOfSeasonsInputOnChange={this.numOfSeasonsInputOnChange}
        createSeasonsInputs={this.createSeasonsInputs}
        currentSeasonInputOnChange={this.currentSeasonInputOnChange}
        closeAddPage={this.closeAddPage}
        setColor={this.setColor}
        customOnCheckUncheck={this.customOnCheckUncheck}
        title={this.state.inputContent}
        connectToServer={this.connectToServer}
        info={this.state.info}
        foundTitle={this.state.info.Title}
        />
      </div>
      );
    }
  }

export default App;