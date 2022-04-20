import React from 'react'

const CommitteePage = ({props}) => {
  return (
    <div className="container">
        <h1 className="text-center">{props.fullname}</h1>
        <img src={require(`../images/${props.shortname}Color.png`)} alt={props.fullname} />
        <h1 className="text-center">IEEE {props.shortname.toUpperCase()} Nedir?</h1>
        <p>{props.aboutGlobal}</p>
        <h1 className="text-center">IEEE Ege {props.shortname.toUpperCase()} Nedir?</h1>
        <p>{props.aboutEge}</p>

        <h3>İdari Kurul Üyelerimiz</h3>
        {
        props.idariKurul.map((item) => {
            return <div>{item.name}</div>
        })
        }

    </div>
  )
}

export default CommitteePage;