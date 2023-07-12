# Nest主要设计模式

## Dependency Injection 依赖注入

```typescript
class UserService {
  getList(id) {
    // 获取用户的逻辑 
  }
}

class Controller {
  constructor() {
    this.Service = new UserService();
  }

  read(id) {
    // 处理用户数据的逻辑
    const result = this.Service.getList(id);  
  }
}
```

``` js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}

```

此时controller 和 UserService 存在了强耦合的关联，无法复用。若我们想用AuthService时必须新注册一个类来实现。并且需要改动getUser里面的代码。那我们此时就需要解决这个问题

 使用DI 依赖注入。 依赖是Service 依赖的标准需要拥有一个getList方法，并且接收一个id

```typescript
class Controller {
  constructor(Service) {
    this.Service = Service; 
  }

  read(id) {
    const result = this.Service.getList(id); 
  }
}

```

 实际使用

```typescript
abstract class Service {
 get
}
class AuthService{
 getList(id){
  //xxx
 }
}
class UserService{
 getList(id){
  //xxx
 }
}
class Controller {
  ...
}
const instance = new Constroller(new UserService)
const instance = new Constroller(new AuthService)
```

 此时我们的Constroller与service解耦，具体调用的方法完全取决于外部依赖注入进来的方法.
 可扩展性 ✅
 解耦    ✅
 可测试性 ✅

## Inversion of Control  控制反转

 控制反转的本质就是降低耦合度，不再强依赖一些属性和方法。具体的实现方式是DI依赖注入
 控制反转需要一个容器，这个容器接手类的控制权

### 好处

1. 解耦和模块化
2. 更方便的依赖注入
3. 配置集中管理

### 如何控制反转

 控制反转需要的条件如下

1. 需要一个管理容器  Container
2. 容器需要拥有register方法用来管理容器的注册
3. 容器需要有一个解析的方法 （从容器中解析已注册的依赖项并注入)
让所有的依赖项统一管理注册解耦了对象之间的强依赖关系

## 案例

```typescript
  abstract class Service {
    getList: () => void;
    putList: () => void;
  }

  class Container {
 //创建一个变量存贮依赖项
    private dependencies: { [key: string]: any };
    // 注册方法
    register(key: string, dependency: any) {
      this.dependencies[key] = dependency;
    }
 // 解析方法
    resolve(key: string) {
      if (this.dependencies[key]) {
        return this.dependencies[key];
      }
      throw new Error(`依赖 ${key}未被注册到容器，请先注册到容器再去使用`);
    }
  }

  const container = new Container();
  container.register("AuthService", new AuthService());
  const controller = new Controller(container.resolve("AuthService"));
};
```
