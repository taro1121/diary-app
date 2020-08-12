import React, { Component } from 'react'
// import styled from 'styled-components'

import logo from '../logo.svg'

// const Wrapper = styled.a.attr({
//     className: 'navbar-brand',
// })``

class Logo extends Component {
    render() {
        return (
            <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Chart Diary</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#">Features</a>
            <a class="nav-item nav-link" href="#">Pricing</a>
            <a class="nav-item nav-link disabled" href="#">Disabled</a>
          </div>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
        </div>
      </nav>


    <h3>Enter Diary</h3>
    <p>Enter itemized (max 140 characters) diary items (min 1 and max 6 per day) and assign evaluation value for each entry (+5 most positive and -1 most negative impct to your life).</p>
    <form>
        <div class="form-group">
            <label>Date</label>
            <input type="date" name="date" id=""/>
        </div>
        <div class="form-group">
            <label>Item1</label>
            <textarea name="" id="" rows="2" columns="100"></textarea>
            <label>Value</label>
            <input type="number" min="-5" max="5" step="1.0"/>
        </div>
        <div class="form-group">
            <label>Item2</label>
            <input type="text" name="" id="" maxlength="140" size="100"/>
            <label>Value</label>
            <input type="number" min="-5" max="5" step="1.0"/>
        </div>
        <div class="form-group">
            <label>Item3</label>
            <input type="text" name="" id="" maxlength="140" size="100"/>
            <label>Value</label>
            <input type="number" min="-5" max="5" step="1.0"/>
        </div>
        <div class="form-group">
            <label>Item4</label>
            <input type="text" name="" id="" maxlength="140" size="100"/>
            <label>Value</label>
            <input type="number" min="-5" max="5" step="1.0"/>
        </div>
        <div class="form-group">
            <label>Item5</label>
            <input type="text" name="" id="" maxlength="140" size="100"/>
            <label>Value</label>
            <input type="number" min="-5" max="5" step="1.0"/>
        </div>
        <div class="form-group">
            <label>Item6</label>
            <input type="text" name="" id="" maxlength="140" size="100"/>
            <label>Value</label>
            <input type="number" min="-5" max="5" step="1.0"/>
        </div>
        <button type="button" class="btn btn-primary btn-sm">Submit</button> <button type="button" class="btn btn-secondary btn-sm">Cancel</button>
    </form>
    
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>


            </div>
            // <Wrapper href="https://sambarros.com">
            //     <img src={logo} width="50" height="50" alt="sambarros.com" />
            // </Wrapper>
        )
    }
}

export default Logo