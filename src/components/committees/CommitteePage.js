import React from 'react'

const CommitteePage = ({props}) => {
  return (
    <div className="container">
        <h1 className="text-center">{props.fullname}</h1>
        <img src={require(`../images/${props.shortname}.png`)} alt={props.fullname} width="500px"/>
        <h1 className="text-center">IEEE {props.shortname.toUpperCase()} Nedir?</h1>
        <p className="bigger">{props.aboutGlobal}</p>
        <h1 className="text-center">IEEE Ege {props.shortname.toUpperCase()} Nedir?</h1>
        <p className="bigger">{props.aboutEge}</p>

        <h3>İdari Kurul Üyelerimiz</h3>
        {
        props.idariKurul.map((item) => {
            return <div>
              {item.name}
              <img src={require(`../images/idariKurul/${item.photo}.png`)} alt="" />
              </div>
        })
        }

    </div>
  )
}

export default CommitteePage;