import React from 'react'
import isEqual from 'fast-deep-equal'
import Image from '../../Image'
import { PrettierIcon } from '../../../../assets'

interface ConfigCardProps {
  configId: number
  configName: string
  configType?: string
  configRecently?: string
  onClick?: (value: string | number) => void
}

const ConfigCard: React.FC<ConfigCardProps> = (props) => {
  const { configId, configName, configRecently, configType, onClick } = props

  const handleClick = React.useCallback(() => {
    if (onClick) {
      onClick(configId)
    }
  }, [configId, onClick])

  return (
    <div className="config-list__items" onClick={handleClick}>
      {configType === 'prettier' && (
        <Image>
          <PrettierIcon width={80} height={80} />
        </Image>
      )}
      <p className="config-list__items--name">{configName}</p>
      {configType && <p className="config-list__items--type">{configType}</p>}
      {configRecently && (
        <p className="config-list__items--type">{configRecently}</p>
      )}
    </div>
  )
}

export default React.memo(ConfigCard, isEqual)
