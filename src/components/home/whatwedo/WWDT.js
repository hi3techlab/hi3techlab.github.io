import React from 'react'

const WWDT = (props) => {
  return (
    <div>
        <section class="container">
            <div class="card">
                <div class="content">
                    <img class="logo" src={props.image} alt="mparticle" />
                    <h6>{props.heading}</h6>
                    <div class="hover_content">
                        {props.list}
                    </div>
                </div>
            </div>       
        </section>
  </div>
  )
}

export default WWDT