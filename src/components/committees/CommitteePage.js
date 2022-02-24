import React from 'react'

const CommitteePage = ({fullname, imgSrc, about, idariKurul}) => {
  return (
    <div>
        <h1>{fullname}</h1>
        <img src={imgSrc} alt={fullname} />
        <p>{about}</p>

        {
        idariKurul.map((item) => {
            return <div>{item.name}</div>
        })
        }

    </div>
  )
}

export default CommitteePage;