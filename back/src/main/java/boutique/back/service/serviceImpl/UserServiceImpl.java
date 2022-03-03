package boutique.back.service.serviceImpl;

import boutique.back.model.User;
import boutique.back.repository.UserRepository;
import boutique.back.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> userList() {
        return userRepository.findAll();
    }
}
