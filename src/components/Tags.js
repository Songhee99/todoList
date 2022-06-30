import React, { useState, useEffect, useCallback } from "react";
import { SwatchesPicker } from "react-color"
import { ChromePicker } from 'react-color';

// const tags = useSelector((state) => state.reducer.tags)
// const allTags = useSelector((state) => state.reducer.allTags)
const [tagColor, setTagColor] = useState("white")
const [tagName, setTagName] = useState("")
const [tagPalette, setTagPalette] = useState(false)

const handleTagName = (name) => {
  setTagName(name.target.value)
  }

  const handleTagColor = (color) => {
  setTagColor(color.hex)
  }

  const openTagsPalette = () => {
  setTagPalette(!tagPalette)
  }

//   const closeModal = () => {
//     //modal창 close
//     dispatch(changeModal({ state: false, type: "tag" }))
//     setTagPalette(false)
//     setTagName("")
//   }
const onsubmit = () => {
  if (tagName === "") {
    alert("태그를 입력해주세요 !")
  } else {
    
    let duplicate = false
    tags.forEach((data) => {
      if (data.name === tagName) duplicate = true
    })

    let colorDuplicate = false
    tags.forEach((data) => {
      if (data.tagColor === tagColor) colorDuplicate = true
    })

    let allTagDuplicate = false

    if (duplicate) alert("같은 이름의 태그가 이미 존재합니다 !")
    else if (colorDuplicate) alert("같은 색의 태그가 이미 존재합니다 !")
    else {
    allTags.forEach((data) => {
      if (data.name === tagName) {
        dispatch(
          addTag({
            name: tagName,
            tagColor: data.tagColor,
            id: new Date().getTime(),
          })
        )
        alert(
          "기존의 태그가 존재하므로 색상과 생성일이 자동으로 변경됩니다."
        )
        allTagDuplicate = true
        setTagName("")
        return
      }
    })}
  }
}

<input onChange={handleTagName}>
<button onClick={openTagsPalette}>태그 색상</button>
{tagPalette && (
  <SwatchesPicker color={tagColor} onChangeComplete={handleTagColor} />
  )}
<button onClick={onsubmit}>태그 색상 지정</button>
</input>