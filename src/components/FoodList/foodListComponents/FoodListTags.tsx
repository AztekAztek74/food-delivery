import React from 'react'
import { Tag } from 'antd'
import 'antd/dist/antd.css'

export const FoodListTags: React.FC<{tags: Array<string>}> = ({tags}) =>{
    return(
        <div className='tags'>
            {tags.map(item=>{ 
                switch (item){
                    case "popular":
                        return <Tag color='#06b83b' key={'popular'} className='tags__popular'>Популярное</Tag>
                    case "acute":
                        return <Tag color='#ff0000' key={'acute'} className='tags__acute'>Острое</Tag>
                    case "seafood":
                        return <Tag color='#14a8ec' key={'seafood'} className='tags__seafood'>Морепродукты</Tag>
                    case "closed":
                        return <Tag color='#ecf00e' key={'closed'} className='tags__closed'>Закрытая</Tag>
                }
                return item
            })}
        </div>
    )
}