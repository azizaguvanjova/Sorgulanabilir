import { useState } from 'react'
import PostComments from './PostComments'
import PostContent from './PostContent'
import postData from '../postData'

export default function DebatePost() {
  /* Challenge 

Form çalışmıyor. Göreviniz, kullanıcı "Gönder "e tıkladığında gönderiye bir yorum ekleyen kontrollü bir form yapmaktır.

    1. Yorum, yorum dizisinin alt kısmında, girilen kullanıcı adı ve yorum metni önceki yorumlar gibi görüntülenecek şekilde görünmelidir. 
       
    2. Yorum, önceki yorumların verilerini içeren array'e eklenmelidir. 
    
    3. Girilen kullanıcı adı kaydedilmeli, ancak kullanıcı onay kutusunu işaretlerse "AnonimKullanıcı" olarak görünmelidir.
    
    4. Kullanıcı formu göndermek için text input elemanına ve comment box elemanına metin girmek zorunda olmalı ve kullanıcı bir yorum gönderdikten sonra elemanlar ve onay kutusu temizlenmelidir. Sayfa yüklendiğinde de boş olmalıdırlar.   
        
    5. Kodunuz tamamen bu dosyanın içinde yer alabilir, ancak isterseniz bazı kısımları taşıyabilirsiniz. 

*/

  const [comments, setComments] = useState(postData.comments)
  const [userName, setUserName] = useState('')
  const [comment, setComment] = useState("")
  const [anonim, setAnonim] = useState(false)


  const handleUserNameChange = (e) => {
    setUserName(e.target.value)
  }

  const handleCommentChange = (e) =>{
    setComment(e.target.value)
  }

  const handleBoxChange = (e) => {
    setAnonim(e.target.checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  

  if (!userName.trim() || !comment.trim()){
    alert('Lütfen kulllancı adı ve yorum metnı doldurun.')
    return
  }
    

const newComment = {
  id: comments.length +1,
  username: anonim ? 'Anonım kullancı' : userName,
  text: comment,
}

setComments([...comments, newComment])

setUserName('')
setComment('')
setAnonim('')

  }

  return (
    <div className='post-container'>
      <PostContent data={{ ...postData }} />
      <PostComments data={comments} />
      <form onSubmit={handleSubmit}>
        <input
          className='text-input'
          type='text'
          placeholder='Kullanıcı adı girin.'
          value={userName}
          onChange={handleUserNameChange}
        />
        <textarea placeholder='Ne düşünüyorsunuz?'
        value={comment} 
        onChange={handleCommentChange}
        />
        <label>
          <input className='checkbox' type='checkbox' checked={anonim} onChange={handleBoxChange} />
          İsimsiz mi göndereyim?
        </label>
        <button type='submit'>Gönder</button>
      </form>
    </div>
  )
}
