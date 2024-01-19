import React from 'react'

const CommitteePage = ({ props }) => {
  return (
    <div className="container">

      <div className="committee-page-div">
        <img src={require(`../../img/committees/${props.shortname.toLowerCase()}.png`)} alt={props.fullname} className="committee-page-img" /> 
      </div>

      <h1 className="text-center">IEEE {props.shortname} Nedir?</h1>
      <p className="bigger">{props.aboutGlobal}</p>
      <hr className='hr-style' />
      <h1 className="text-center">IEEE Ege {props.shortname} Nedir?</h1>
      <p className="bigger">{props.aboutEge}</p>
      <hr className='hr-style' />
      <h1 className="text-center">İdari Kurul Üyelerimiz</h1>
      {
        props.idariKurul.map((item) => {
          return <div className="container flex bg">
            <div className="flex1">
              <div>
                <img src={require(`../../img/crew23/${item.photo}.png`)} alt="" className="idarikurul-img" />
              </div>
            </div>
            <div className="flex2 ik-margin">
              <div className="ik-name">
                {item.name}
              </div>
              <div className="content-inline">
                {item.desc}
              </div>
            </div>
          </div>
        })
      }

    </div>
  )
}

export default CommitteePage;