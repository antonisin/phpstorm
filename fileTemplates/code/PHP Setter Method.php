/**
 * @param ${TYPE_HINT} $${PARAM_NAME}
 * @return ${CLASS_NAME}
 */
public ${STATIC} function set${NAME}(${TYPE_HINT} $${PARAM_NAME}):${CLASS_NAME}
{
#if (${STATIC} == "static")
    self::$${FIELD_NAME} = $${PARAM_NAME};
#else
    $this->${FIELD_NAME} = $${PARAM_NAME};
#end
    return $this;
}
