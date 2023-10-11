import React, { memo, useEffect, useState } from 'react'
import SearchModal from '../Modals/SearchModal';


function SearcBox() {
    
    const [activeDialog, setActiveDialog] = useState(false);
    const [searchValue, setSearchValue] = useState<string>("")

    useEffect(() => {
        if (searchValue.length > 1) {
            setActiveDialog(true)
        }
    }, [searchValue])

    return (
        <div className="relative">
            <SearchModal text={searchValue} activeDialog={activeDialog} setActiveDialog={setActiveDialog} />
            <input onChange={e => setSearchValue(e.currentTarget.value)} value={searchValue}
                className="w-full rounded hover:shadow-lg focus:shadow-lg focus:outline-0 px-2.5 py-2 border pl-10" type="text" placeholder="Search..." />
        </div>
    )
}

export default memo(SearcBox)