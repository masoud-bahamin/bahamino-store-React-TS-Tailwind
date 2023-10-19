import { memo, useEffect, useState } from 'react'
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
                className="w-[413px] h-11 rounded hover:shadow-lg focus:shadow-lg focus:outline-0 border pl-4" type="text" placeholder="Search here..." />
        </div>
    )
}

export default memo(SearcBox)