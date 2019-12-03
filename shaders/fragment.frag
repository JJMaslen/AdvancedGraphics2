varying vec3 fPosition;
varying vec3 fNormal;
varying vec2 Uv;

uniform sampler2D texture1;
void main()
{
    vec3 viewDir = normalize(-fPosition);

    vec3 light = vec3(0, 1, 0);
    vec3 material = texture2D(texture1,Uv).rgb;
    
    vec3 reflectDir = normalize(reflect(fNormal, light));

    float shine = 10.0;

    vec3 ambient = vec3(0,0.5,0) * 0.2;

    vec3 diffuse = material * max(0.0, dot(light, fNormal)) * 0.5;

    vec3 specular = material * pow(max(0.0,dot(viewDir, reflectDir)), shine) * 1.0;

    gl_FragColor = vec4(ambient + diffuse + specular, 1.0);
}