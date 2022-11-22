/* eslint-disable react-hooks/exhaustive-deps */
import { Spin } from 'antd'
import React, { useEffect } from 'react'
import { useAvailableSection } from '../../../services/hooks/bookedSection'
import ListCard from '../card'
import Empty from '../empty'


function BookingSeatTab({date}) {

  const {
    mutate: getAvailableSection,
    isLoading,
    data
  } = useAvailableSection()

  useEffect(() => {getAvailableSection(date)}, [date])
  return (
    <Spin size="large" spinning={isLoading} wrapperClassName="w-100 h-full">
      <div className='w-full h-full py-3 px-4'>
        {data?.length ? (
          <div className="row">
            {data?.map((n)=>(
              <div className="col-6 col-sm-4 col-md-3 my-2" key={n.id}>
                <ListCard 
                  id={n.id}
                  title={n.club || "Seat"}
                  description={`${n.numberOfPerson} Seaters`}
                  price={n.sectionPrice}
                />
              </div>
            ))}
          </div>
          ) : (
            <Empty 
              title="No available seat"
              description="Choose another date"
              icon
            />
        )}
      </div>
    </Spin>
  )
}

export default BookingSeatTab