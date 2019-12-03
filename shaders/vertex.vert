varying vec3 fPosition;
varying vec3 fNormal;
varying vec2 Uv;

void main()
{
    Uv = uv;
    fNormal = normalize(normalMatrix*normal);

    vec4 pos = modelViewMatrix * vec4(position, 1.0);

    fPosition = pos.xyz;

    gl_Position = projectionMatrix * pos;
}